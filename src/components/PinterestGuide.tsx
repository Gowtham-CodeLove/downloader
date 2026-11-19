import Link from 'next/link';

interface PinterestGuideProps {
  mode: 'video' | 'image';
}

const PIN_FORMATS_VIDEO = [
  { kind: 'Video Pin', example: 'pinterest.com/pin/123456…', result: 'MP4 video file' },
  { kind: 'Idea Pin (Video)', example: 'pinterest.com/pin/987654…', result: 'MP4 clip' },
  { kind: 'Short Link', example: 'pin.it/abc123', result: 'Auto-resolved MP4 video' },
];

const PIN_FORMATS_IMAGE = [
  { kind: 'Image Pin', example: 'pinterest.com/pin/123456…', result: 'Full-resolution JPG image' },
  { kind: 'Infographic Pin', example: 'pinterest.com/pin/987654…', result: 'Original high-res JPG' },
  { kind: 'Short Link', example: 'pin.it/abc123', result: 'Auto-resolved HD JPG' },
];

const TIPS_VIDEO = [
  {
    title: 'Use a direct Pin link',
    text: 'Open the Pin you want to save and tap Share → Copy link. Both pinterest.com/pin/… URLs and short pin.it/… links work.',
  },
  {
    title: 'Save multiple videos together',
    text: 'Paste several Pinterest video links using Multiple Links to fetch and download every video without watermarks.',
  },
  {
    title: 'Cut into Shorts after downloading',
    text: 'Need 9:16 vertical clips or split parts? Open your saved MP4 in Video Cut to trim and reframe directly in your browser.',
  },
  {
    title: 'No account or login needed',
    text: 'Public Pinterest video Pins download directly in HD without signing in, installing extensions, or adding watermarks.',
  },
];

const TIPS_IMAGE = [
  {
    title: 'Fetch original full-size Pins',
    text: 'Open any public image Pin, tap Share → Copy link, and paste it above to save the uncropped original JPG.',
  },
  {
    title: 'Supports pin.it short URLs',
    text: 'Links shared from the Pinterest mobile app (pin.it/…) resolve automatically to the original image file.',
  },
  {
    title: 'Compress or resize for web',
    text: 'Want smaller JPG/WebP files after saving? Run your downloaded image through Video to Images & Image Studio.',
  },
  {
    title: 'Private boards stay private',
    text: 'Only public Pins can be extracted. Secret boards and private accounts are never accessed.',
  },
];

// Step-by-step and questions per mode, so the video and image pages each carry their own text.
const STEPS_VIDEO = [
  'In the Pinterest app, open the video Pin, tap Share (or the ⋯ menu) and choose Copy link. On a computer, copy the address of the Pin page — it looks like pinterest.com/pin/….',
  'Paste the link into the box above and press Fetch Videos. The clip opens in a preview so you can check it is the right one.',
  'Press Download to save it as an MP4 file. On iPhone it lands in Files → Downloads, on Android in the Downloads folder, and on a computer in your usual downloads folder.',
];

const STEPS_IMAGE = [
  'Open the image Pin in the Pinterest app or website, tap Share → Copy link, or copy the pinterest.com/pin/… address from the browser bar.',
  'Paste the link into the box above and press Fetch Images. The full picture appears so you can see exactly what will be saved.',
  'Press Download. The tool asks Pinterest for the original upload rather than the smaller preview shown in the feed, so you get the full, uncropped image.',
];

const FAQ_VIDEO = [
  {
    question: 'Why does it say no video was found?',
    answer:
      'Either the Pin is an image Pin — use the Pinterest Image Downloader for those — or the video is not stored on Pinterest at all. Some Pins only show a video from another site, such as YouTube; there is no Pinterest video file to save in that case.',
  },
  {
    question: 'What quality are Pinterest videos saved in?',
    answer:
      'Pinterest re-encodes every video it hosts, and most video Pins are kept at 720p. The tool picks the HD version when the Pin has one. It cannot be sharper than what was uploaded.',
  },
  {
    question: 'Do pin.it short links work?',
    answer:
      'Yes. Links shared from the Pinterest app often look like pin.it/abc123. They are followed to the full Pin automatically, so paste them as they are.',
  },
  {
    question: 'Can I download a whole board?',
    answer:
      'No. Each link has to be a single Pin. To save several clips, open the Multiple Links tab and paste one Pin link per box.',
  },
  {
    question: 'Can I re-upload a Pinterest video I downloaded?',
    answer:
      'Only with permission. A Pin is often a re-share, so the account that pinned it is not always the creator. Follow the Pin’s source link to find who made it, and ask them before posting the video elsewhere.',
  },
];

const FAQ_IMAGE = [
  {
    question: 'Is the downloaded image the full size?',
    answer:
      'Yes. The feed shows a resized preview (usually 736 pixels wide). The tool fetches the original file that was uploaded to Pinterest, so the download is the largest version available.',
  },
  {
    question: 'Why does it say no image was found?',
    answer:
      'The Pin may be a video Pin — use the Pinterest Video Downloader for those — or it may have been deleted or saved to a secret board. Only public Pins can be fetched.',
  },
  {
    question: 'Do pin.it short links work?',
    answer:
      'Yes. Short links shared from the Pinterest app are followed to the full Pin automatically.',
  },
  {
    question: 'Can I save every image on a board?',
    answer:
      'No. Each link has to be a single Pin. For several pictures, open the Multiple Links tab and paste one Pin link per box.',
  },
  {
    question: 'Can I use the images I download?',
    answer:
      'For personal reference, yes. For anything public or commercial you need the creator’s permission. Many Pins are re-shares, so check the Pin’s source link to find the original photographer or designer.',
  },
];

export default function PinterestGuide({ mode }: PinterestGuideProps) {
  const isVideo = mode === 'video';
  const rows = isVideo ? PIN_FORMATS_VIDEO : PIN_FORMATS_IMAGE;
  const tips = isVideo ? TIPS_VIDEO : TIPS_IMAGE;
  const steps = isVideo ? STEPS_VIDEO : STEPS_IMAGE;
  const faqs = isVideo ? FAQ_VIDEO : FAQ_IMAGE;

  return (
    <section
      className="max-w-4xl mx-auto px-4 mt-20 space-y-14 text-left"
      aria-labelledby="pinterest-guide"
    >
      <div>
        <h2
          id="pinterest-guide"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
        >
          {isVideo
            ? 'Which Pinterest videos can I download?'
            : 'Which Pinterest images can I download?'}
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-zinc-400 leading-relaxed">
          {isVideo
            ? 'Paste any public Pinterest video Pin or short pin.it URL to preview and download the clean MP4 video without watermarks.'
            : 'Paste any public Pinterest photo Pin or short pin.it URL to inspect and save the full-resolution JPG image.'}
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-neutral-500 dark:text-zinc-500">
              <tr className="border-b border-neutral-200/80 dark:border-zinc-800/80">
                <th className="px-5 py-3 font-bold">Pin type</th>
                <th className="px-5 py-3 font-bold">Link looks like</th>
                <th className="px-5 py-3 font-bold">You get</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-zinc-300">
              {rows.map((row) => (
                <tr
                  key={row.kind}
                  className="border-b last:border-0 border-neutral-100 dark:border-zinc-900"
                >
                  <td className="px-5 py-3 font-semibold whitespace-nowrap">{row.kind}</td>
                  <td className="px-5 py-3 font-mono text-xs text-neutral-500 dark:text-zinc-400 whitespace-nowrap">
                    {row.example}
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {isVideo ? 'How to download a Pinterest video' : 'How to download a Pinterest image'}
        </h2>
        <ol className="mt-6 space-y-3 rounded-2xl border border-neutral-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-6 pl-10 list-decimal text-sm leading-relaxed text-neutral-600 dark:text-zinc-400 marker:font-bold marker:text-[#E60023]">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {isVideo ? 'Tips for saving Pinterest videos' : 'Tips for saving Pinterest images'}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-neutral-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-5"
            >
              <h3 className="font-bold text-neutral-900 dark:text-white">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {isVideo ? 'Pinterest video downloader FAQ' : 'Pinterest image downloader FAQ'}
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-neutral-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer text-base font-bold text-neutral-900 dark:text-white">
                {faq.question}
                <span className="grid place-items-center shrink-0 w-7 h-7 rounded-full bg-neutral-100 dark:bg-zinc-900 text-neutral-500 transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-600 dark:text-zinc-400">
          Also explore{' '}
          <Link
            href={isVideo ? '/pinterest/image' : '/pinterest/video'}
            className="font-semibold text-[#E60023] underline underline-offset-2"
          >
            {isVideo ? 'Pinterest Image Downloader' : 'Pinterest Video Downloader'}
          </Link>
          ,{' '}
          <Link href="/instagram" className="font-semibold text-[#E60023] underline underline-offset-2">
            Instagram Video Downloader
          </Link>
          , or edit saved clips in{' '}
          <a
            href="https://videocut.codelove.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#E60023] underline underline-offset-2"
          >
            Video Cut
          </a>
          .
        </p>
      </div>
    </section>
  );
}

