// ════════════════════════════════════════════════════════════════════════
// NEW ARTIST TEMPLATE
// 1. Copy this file to `<your-slug>.ts` (slug must match the URL + an entry in
//    src/content/overview.ts artists[]).
// 2. Fill in the fields. Put images in public/images/foam/ and audio in
//    public/audio/foam/ ; videos can be a remote URL (they stream).
// 3. Rename the export and register it in `index.ts`.
// ════════════════════════════════════════════════════════════════════════
import type { Exhibition } from "@/types/foam";

export const exampleArtist: Exhibition = {
  slug: "example-artist",
  artistName: "Example Artist",
  exhibitionName: "Exhibition Title",
  label: "Exhibition Title", // shown in the bottom player bar
  // The "i" panel essay. Plain HTML — keep <h1>/<p>/<em> tags.
  descriptionHtml: `
  <h1><em>Exhibition Title</em> is a short lead sentence about the work.</h1>
  <p>A paragraph describing the project.</p>
  `,
  copyright: "All content in this digital exhibition are courtesy of the artist.",
  audio: {
    src: "/audio/foam/your-soundscape.mp3", // the play-button track ("" to disable)
    title: "from the series Exhibition Title",
    copyright: "Example Artist",
  },
  // Opening title card.
  intro: {
    artistName: "Example Artist",
    exhibitionName: "Exhibition Title",
    textColor: "#F9DCA1",
    backgroundColor: "#1E1E1E",
  },
  // Link shown at the very end of the horizontal exhibition.
  nextExhibition: { name: "Another Artist", slug: "another-artist", backgroundColor: "#000000" },
  // The horizontal panels, left → right. Mix the three component types freely.
  sections: [
    {
      uid: "section-1",
      component: "OnlineExhibitionImage",
      backgroundColor: "#000000",
      image: "/images/foam/your-image.jpg",
      alt: "Describe the image",
      top: null, // vertical nudge (%, optional)
      left: null,
      height: 35, // image height (relative); ~35 is a medium photo
      sectionWidth: 500, // panel width in px
      marginLeft: 0,
      marginRight: 0,
      freeImage: false,
      disableZoom: false,
      captionPosition: "", // "left-middle" puts the caption beside the image
      caption: "", // e.g. "← Bromelia\nRead about this species"
      credits: "TITLE, medium / description", // first word renders in italic serif
      creditsItalicLead: true,
      modalHtml: "", // optional essay opened by clicking the caption
    },
    {
      uid: "section-2",
      component: "OnlineExhibitionInlineVideo",
      backgroundColor: "#000000",
      video: "https://a.storyblok.com/.../your-video.mp4", // streams from CDN
      alt: "Describe the video",
      title: "Video title",
      height: 100,
    },
    { uid: "spacer-1", component: "OnlineExhibitionProse", backgroundColor: "#000000" },
  ],
};
