"use client";

export function CopyToClipboardButton() {
  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([
      new ClipboardItem({
        [image.type]: image,
      }),
    ]);

    alert("Copied to clipboard!");
  }

  return (
    <button
      className="w-full rounded-lg bg-pink-900 p-4 text-white transition-colors hover:bg-pink-800"
      type="submit"
      onClick={handleClick}
    >
      Copy to clipboard
    </button>
  );
}
