import {createClient} from "@supabase/supabase-js";
import {revalidatePath} from "next/cache";
import Link from "next/link";
import {redirect} from "next/navigation";

const supabaseUrl = "https://axtdtvhrdxtjtgricily.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

async function getQuestions() {
  const questions = await supabase
    .from("questions")
    .select()
    .then(({data}) => data as {id: string; text: string}[]);

  return questions;
}

export default async function Home() {
  const questions = await getQuestions();

  async function handleSubmit(formData: FormData) {
    "use server";

    const question = formData.get("question");
    const id = Date.now().toString();

    await supabase.from("questions").insert({text: question, id: id});
    revalidatePath("/");
    redirect(`/${id}`);
  }

  return (
    <div className="grid gap-8">
      <form action={handleSubmit} className="grid gap-4">
        <section className="grid">
          <p className="rounded-t-lg bg-pink-900 p-4 text-xl font-medium text-white">Question</p>
          <input
            className="rounded-b-lg bg-gray-600 p-4 text-xl"
            name="question"
            placeholder="Me pregunto si..."
          />
        </section>
        <button
          className="w-full rounded-lg bg-pink-900 p-4 text-white transition-colors hover:bg-pink-800"
          type="submit"
        >
          Enviar pregunta
        </button>
      </form>
      <hr />
      <article className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] items-start gap-4">
        {questions.map((question) => (
          <Link key={question.id} className="grid" href={`/${question.id}`}>
            <p className="rounded-t-lg bg-pink-900 p-4 text-xl font-medium text-white">Question</p>
            <p className="rounded-b-lg bg-gray-600 p-4 text-xl">{question.text}</p>
          </Link>
        ))}
      </article>
    </div>
  );
}
