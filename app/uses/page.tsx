import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, writing, videos, and music.",
};

//TODO - add url links to these products; affiliate links? 
export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>24&quot; iMac Green 16GB RAM(2021)</li>
          <li>13&quot; Macbook Air 8GB RAM(2022)</li>
          <li>Apple Magic Keyboard</li>
          <li>Bose Subwoofer</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: VSCode</li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: Hyper / zsh</li>
        </ul>
        {/* <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Sony A7III (28-50mm, 35mm f1.8)</li>
          <li>Shure SM7B + Elgato Wave XLR + Boom</li>
          <li>Elgato Camlink</li>
          <li>Logitech C920</li>
          <li>Elgato Key Light (x2)</li>
          <li>Elgato Master Mount</li>
          <li>Aputure Mark 2 120D II</li>
          <li>Aputure Light Dome II</li>
        </ul> */}
        <h3 id="software">Software</h3>
        <ul>
          {/* <li>1Password</li> */}
          {/* <li>CleanShot X</li> */}
          {/* <li>RetroClip</li> */}
          <li>Grammarly</li>
          <li>Obsidian</li>
          {/* <li>Raycast.com</li> */}
          <li>Readwise</li>
          <li>Spotify</li>
        </ul>
        {/* <h3 id="music">Music</h3>
        <ul>
          <li>Yamaha P-105 Piano</li>
          <li>Martin Acoustic Guitar (X-Series)</li>
        </ul> */}
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro 2</li>
          {/* <li>Apple Watch</li> */}
          <li>Apple iPhone 13</li>
          <li>Kindle</li>
          {/* <li>Tesla Model 3</li> */}
        </ul>
      </div>
    </section>
  );
}
