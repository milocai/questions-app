import {createClient} from "@supabase/supabase-js";
import Link from "next/link";

import {CopyToClipboardButton} from "./copy-to-clipboard-btn";

const supabaseUrl = "https://axtdtvhrdxtjtgricily.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export default async function Question({params: {id}}: {params: {id: string}}) {
  const question = await supabase
    .from("questions")
    .select()
    .eq("id", id)
    .single()
    .then(({data}) => data as {id: string; text: string});

  return (
    <article className="grid gap-4">
      <Link href="/">← Volver atrás</Link>
      <section className="grid">
        <p className="rounded-t-lg bg-pink-900 p-4 text-xl font-medium text-white">Question</p>
        <p className="rounded-b-lg bg-gray-600 p-4 text-xl">{question.text}</p>
      </section>
      <CopyToClipboardButton />
    </article>
  );
}
