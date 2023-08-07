import {createClient} from "@supabase/supabase-js";
import {ImageResponse} from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const supabaseUrl = "https://axtdtvhrdxtjtgricily.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

// Image generation
export default async function Image({params: {id}}: {params: {id: string}}) {
  const question = await supabase
    .from("questions")
    .select()
    .eq("id", id)
    .single()
    .then(({data}) => data as {id: string; text: string});

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            //backgroundColor: "#ff000080",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          tw="bg-pink-900"
        >
          <p>Question {question.id}</p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>{question.text}</p>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  );
}
