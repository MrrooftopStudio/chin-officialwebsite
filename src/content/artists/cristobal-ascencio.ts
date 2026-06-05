// ════════════════════════════════════════════════════════════════════════
// ARTIST EXHIBITION — Cristóbal Ascencio. Edit freely; changes show on
// /artist/cristobal-ascencio.
//   • intro       — the opening title card (artist name + colors)
//   • audio       — the soundscape track (play button)
//   • sections[]  — the horizontal panels, in order:
//       OnlineExhibitionImage  (image + credits + optional species modal)
//       OnlineExhibitionInlineVideo (full-screen looping video, streamed)
//       OnlineExhibitionProse  (empty spacer panel)
//   • descriptionHtml — the "i" panel essay (plain HTML)
// To add another artist: copy artists/_template.ts, fill it in, and register it
// in artists/index.ts.
// ════════════════════════════════════════════════════════════════════════
import type { Exhibition } from "@/types/foam";

export const cristobalAscencio: Exhibition = {
  "slug": "cristobal-ascencio",
  "artistName": "Cristóbal Ascencio",
  "exhibitionName": "Las flores mueren dos veces",
  "label": "Las flores mueren dos veces",
  "descriptionHtml": `
  <h1>
  <em>Las flores mueren dos veces</em> is a personal exploration of loss, grief and reconciliation following the death of the artist’s father. Through various tools of digital creation and manipulation, Cristóbal Ascencio created a poetic exploration of his personal memories, altering family photos and recreating the last garden his father worked on.  </h1>
  <p>Fifteen years after his father passed away, Cristóbal Ascencio learned that his death had been a suicide. The last words of Margarito’s farewell letter stated: “Forgive me and communicate with me.” This new piece of information triggered Ascencio to revisit the images, places and memories connected to his family history.  </p>
  <p>In an attempt to answer his father’s final request, he digitally recreated a collection of plants based on his father’s instructions as well as an immersive garden, where the plants function as a bridge between past and present. Using different digital techniques, such as ‘data bending’, photogrammetry and 3D modelling, Ascencio plays on the idea that our memories are manufactured, manipulated and corrupted over time.  </p>
`,
  "copyright": "All content in this digital exhibition are courtesy of the artist.",
  "audio": {
    "src": "/audio/foam/soundscape-garden-instalation.mp3",
    "title": "from the series Las Flores Mueren Dos Veces",
    "copyright": "Cristóbal Ascencio Ramos"
  },
  "intro": {
    "artistName": "Cristóbal Ascencio",
    "exhibitionName": "Las flores mueren dos veces",
    "textColor": "#F9DCA1",
    "backgroundColor": "#1E1E1E"
  },
  "nextExhibition": {
    "name": "Cansu Yıldıran",
    "slug": "cansu-yildiran",
    "backgroundColor": "#130506"
  },
  "sections": [
    {
      "uid": "a5cefaac-f2f4-4db2-8ff8-9a505cc615ed",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/margarito.jpg",
      "alt": "Archival portrait of the artist's father, with manipulated pixels wiping out the face © Cristóbal Ascencio Ramos",
      "top": 32.5,
      "left": 59,
      "height": 35,
      "sectionWidth": 500,
      "marginLeft": 0,
      "marginRight": 0,
      "freeImage": true,
      "disableZoom": false,
      "captionPosition": "",
      "caption": "",
      "credits": "MARGARITO, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": ""
    },
    {
      "uid": "a8288fdc-e455-4d9e-973b-97327e34d788",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/nacer.jpg",
      "alt": "Archival image of the artist's birth, showing him as a baby being hold by nurses in green scrubs. The pixels are manipulated and appear to wipe out the baby's face© Cristóbal Ascencio Ramos",
      "top": 15,
      "left": 0,
      "height": 35,
      "sectionWidth": 700,
      "marginLeft": 0,
      "marginRight": 10,
      "freeImage": false,
      "disableZoom": false,
      "captionPosition": "",
      "caption": "",
      "credits": "NACER, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": ""
    },
    {
      "uid": "3ce814f1-e6bd-47c6-85b8-385f06f18b04",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    },
    {
      "uid": "6530cbaf-7413-4ba6-a590-ebff8e95b20b",
      "component": "OnlineExhibitionInlineVideo",
      "backgroundColor": "#000000",
      "video": "https://a.storyblok.com/f/113697/x/0a16f94280/bromelia_016.mp4",
      "alt": "Animated rendering of the Bromelia plant species made with photogrammetry. © Cristóbal Ascencio Ramos",
      "title": "Bromelia, from the series Las Flores Mueren Dos Veces. Digital photography and photogrammetry",
      "height": 100
    },
    {
      "uid": "a6deeac6-fb9b-4ee3-9b98-e7e108dc4fd2",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/wedding.jpg",
      "alt": "Archival image of the artist's parents wedding, showing them drinking from a cup whilst interlocking arms. The pixels are manipulated in a way that appears to wipe out the photograph© Cristóbal Ascencio Ramos",
      "top": null,
      "left": null,
      "height": 35,
      "sectionWidth": 10,
      "marginLeft": 0,
      "marginRight": 0,
      "freeImage": false,
      "disableZoom": true,
      "captionPosition": "left-middle",
      "caption": "← Bromelia\nRead about this species",
      "credits": "WEDDING, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": "<p>Bromeliads do not need soil to survive, as they obtain the nutrients and water they need through their cup-shaped leaves. Some species even have a modified central leaf that acts as a water reservoir, allowing them to survive in dry environments. Some bromeliads play an important role in their environment by providing food and shelter for a variety of animals, such as frogs and birds. There are more than 3,000 species in the bromeliad family.</p>\n<p>I found a <em>Bromelia</em> in the garden of the house where I grew up. The lady who bought the house and now lives there does not remember how the plant came to her, she was not sure if it was already in the house when she arrived or if the plant came later. Death may not be a permanent condition, it can be feared and that is fine, as long as we can feel something afterward. To go on after death is possible, as long as gardens are also a possibility</p>\n"
    },
    {
      "uid": "6cf9dc02-8584-4d26-af4e-f578dfa33c25",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/letter.jpg",
      "alt": "Letter from Cristóbal Ascencio's father, reading 'Forgive me and communicate with me' © Cristóbal Ascencio",
      "top": 27,
      "left": 0,
      "height": 35,
      "sectionWidth": 349,
      "marginLeft": 0,
      "marginRight": 10,
      "freeImage": false,
      "disableZoom": false,
      "captionPosition": "",
      "caption": "",
      "credits": "LETTER, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": ""
    },
    {
      "uid": "3ac66064-b43b-497b-8a00-9ee6f21baf3d",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    },
    {
      "uid": "ab36ce1e-dd3e-4c0c-a9ca-4b26a3dce03f",
      "component": "OnlineExhibitionInlineVideo",
      "backgroundColor": "#000000",
      "video": "https://a.storyblok.com/f/113697/x/849947143e/monstera_016.mp4",
      "alt": "Animated rendering of the Monstera Deliciosa plant species made with photogrammetry. © Cristóbal Ascencio Ramos",
      "title": "Monstera Deliciosa, from the series Las Flores Mueren Dos Veces. Digital photography and photogrammetry",
      "height": 100
    },
    {
      "uid": "dc5de0fe-c76f-4c65-a0f9-8870a4254cb8",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/burial.jpg",
      "alt": "Archival picture of the artist as a small child, sitting besides his father on the beach. The pixels in the photo are manipulated, blurring the image. © Cristóbal Ascencio Ramos",
      "top": 27,
      "left": 0,
      "height": 35,
      "sectionWidth": 470,
      "marginLeft": 10,
      "marginRight": 0,
      "freeImage": false,
      "disableZoom": false,
      "captionPosition": "left-middle",
      "caption": "← Monstera Deliciosa\nRead about this species",
      "credits": "BURIAL, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": "<p><em>Monstera deliciosa</em>, also known as &quot;Adam&#39;s Rib&quot;. This plant is native to Central and South America and is famous for its large, exotic leaves. One of the most interesting things about <em>Monstera deliciosa</em> is its ability to absorb water and nutrients through its aerial roots. This makes it able to grow in high relative humidity conditions, such as in the rainforest. <em>Monstera</em> has a peculiar growth form. The young leaves start out heart-shaped and develop into perforated and divided leaves as the plant grows and matures.  </p>\n<p>This plant was in the house we lived in when we were little. Several specimens of this plant covered the lower area of the back garden. In front of this garden, at the top, was the balcony of my parent&#39;s room. The land where this house was built was a payment to my father for his work in making a garden. He built that house from scratch, and in that same place, he decided to die.</p>\n"
    },
    {
      "uid": "f5cdb456-cc35-4c48-9e53-ff60090ffad6",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/birthday.jpg",
      "alt": "Archival photo of a small child on the street, a balloon-shaped object at his feet. The pixels are manipulated and wipe out the surrounding people.© Cristóbal Ascencio Ramos",
      "top": 27,
      "left": 0,
      "height": 35,
      "sectionWidth": 327,
      "marginLeft": 0,
      "marginRight": 0,
      "freeImage": false,
      "disableZoom": false,
      "captionPosition": "",
      "caption": "",
      "credits": "BIRTHDAY, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": ""
    },
    {
      "uid": "fc56b2a4-51e5-4507-af18-81cf82024492",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    },
    {
      "uid": "0bee6936-5d5a-4430-807a-71b7aaf78f51",
      "component": "OnlineExhibitionInlineVideo",
      "backgroundColor": "#000000",
      "video": "https://a.storyblok.com/f/113697/x/3ea018c41c/tageteserecta_008.mp4",
      "alt": "Animated rendering of the Tagetes Erecta plant species made with photogrammetry. © Cristóbal Ascencio Ramos",
      "title": "Tagetes Erecta, from the series Las Flores Mueren Dos Veces. Digital photography and photogrammetry",
      "height": 100
    },
    {
      "uid": "8d3a5e6f-870c-4097-bd65-402ce5766ea2",
      "component": "OnlineExhibitionImage",
      "backgroundColor": "#000000",
      "image": "/images/foam/lucha-libre.jpg",
      "alt": "Archival photograph of three kids with colourful lucha libre masks on. The pixels are manipulated and wipe out the background © Cristóbal Ascencio Ramos",
      "top": null,
      "left": null,
      "height": 35,
      "sectionWidth": 10,
      "marginLeft": 0,
      "marginRight": 0,
      "freeImage": false,
      "disableZoom": true,
      "captionPosition": "left-middle",
      "caption": "← Tagetes erecta\nRead about this species",
      "credits": "LUCHA LIBRE, data bending on archival photography",
      "creditsItalicLead": true,
      "modalHtml": "<p><em>Tagetes erecta</em> or marigold. It is a native species of Mexico and Central America. It is known for its yellow, orange, or red flowers, which are used worldwide as ornaments and in various medicinal applications.</p>\n<p>According to Mexican tradition, the cempasúchil is a flower that guides the souls of the dead to the world of the living during the Day of the Dead. Its strong aroma and bright color are believed to attract and help the spirits find their way to their loved ones. In pre-Hispanic times, the Mexica people used cempasúchil in religious ceremonies to honor their ancestors and ask for their blessings.</p>\n<p>Every year, my father planted cempasúchil to sell during the Day of the Dead celebrations in November, we never cut the flowers, we sold the whole plant. Now, Alberto, my father&#39;s best friend, grows cempasúchil and sells it to restaurants for consumption.</p>\n"
    },
    {
      "uid": "a300596c-7a2d-4911-8df0-62993720e59f",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    },
    {
      "uid": "2a42f4d5-1d70-4f4b-8688-168c31263949",
      "component": "OnlineExhibitionInlineVideo",
      "backgroundColor": "#000000",
      "video": "https://a.storyblok.com/f/113697/x/65217bdf1c/digital-exhibiton-100mb.mp4",
      "alt": "Video rendering of digital garden space © Cristóbal Ascencio",
      "title": "from the series Las floren mueren dos veces",
      "height": 100
    },
    {
      "uid": "e5a8abc5-03cd-4bf8-8fbf-3f5c18c6eb6e",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    },
    {
      "uid": "f1b7c5ef-bb89-4b8b-848f-74cb3bdadc20",
      "component": "OnlineExhibitionProse",
      "backgroundColor": "#000000"
    }
  ]
};
