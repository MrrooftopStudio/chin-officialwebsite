// ════════════════════════════════════════════════════════════════════════
// HOMEPAGE CONTENT — edit freely. Changes here change the / and /talent-2024 pages.
// (Seeded once from the live site by scripts/scaffold-content.mjs; now hand-owned.)
// ════════════════════════════════════════════════════════════════════════
import type { OverviewArtist, Category } from "@/types/foam";

/** Small tagline (currently unused in the UI, kept for completeness). */
export const introText = "artists shaping the future of photography";

/** Heading above the artist list in the "i" info panel. */
export const asideTitle = "selected artists";

/** Footer/credit line in the info panel. */
export const copyright = "All image content on talent.foam.org are courtesy of the artists.";

/** Caption under the thumbnail in the info panel. */
export const aboutLabel = "about Foam Talent Digital";

/** The welcome essay shown in the "i" info panel. Plain HTML — edit the text,
 *  keep the <h1>/<p>/<em> tags. */
export const descriptionHtml = `
  <h1>
  <em>Welcome to Talent 2024-2025 – the digital exhibition.</em>  </h1>
  <h1>Here, Foam proudly presents 20 selected Talents in their very own online universe. Out of a dazzling 2,480 submissions, this final curation of exceptional work defines the new horizons of the medium of photography, thematically and technically. Highlighting the connections, this interactive network brings all Talents together and maps out their distinct artistic viewpoints. </h1>
  <p>Spanning across the globe, the stories told by these artists reflect a universal yearning for belonging—a profound desire to anchor, to establish a connection with the past and carve out a sense of place. A driving force underpinning their work is the quest to trace heritage, untangle family lines, and explore personal identity. </p>
  <p>Acknowledging the constructed nature of history, memory, or even their own thoughts, these artists boldly confront existing narratives. They embark on a journey of unlearning, challenging established stories, and turn to the expansive nature of photography to build new understandings and narratives, resonating more authentically with their lived experiences. </p>
  <p>Noteworthy in their approach is the harmonious balance between tradition and innovation. The artists seamlessly blend traditional photographic techniques with cutting-edge developments, including the much-discussed realm of artificial intelligence, and other mediums such as moving image, embroidery and music. <em>Select one of the filters to zoom in on these different techniques and mediums.</em> </p>
  <p>This digital exhibition presents the work in a truly multi-medial way, inviting you to <em>look</em>, <em>listen </em>and <em>interact</em> with the inspiring stories of <em>Talent 2024-2025</em>.</p>
`;

/** The 8 filter clusters. name = pill label; x/y/z = the 3D anchor the camera
 *  flies to when that filter is active. */
export const categories: Category[] = [
  {
    "name": "Illustration",
    "x": 16,
    "y": -15,
    "z": 0
  },
  {
    "name": "Landscape",
    "x": -18,
    "y": -10,
    "z": 10
  },
  {
    "name": "Plants",
    "x": -16,
    "y": 16,
    "z": 10
  },
  {
    "name": "Collage",
    "x": 35,
    "y": 0,
    "z": -10
  },
  {
    "name": "Archival",
    "x": -22,
    "y": 10,
    "z": -10
  },
  {
    "name": "Collaborative",
    "x": -30,
    "y": 0,
    "z": 0
  },
  {
    "name": "Portrait",
    "x": 14,
    "y": 19.5,
    "z": 0
  },
  {
    "name": "Digital Manipulation",
    "x": -16,
    "y": 10,
    "z": -10
  }
];

/** The 20 artists floating in the 3D scatter. Edit name/exhibitionName/image to
 *  change what shows on the homepage. position = default scatter spot; filters =
 *  where each artist moves (+ red connection lines) per active category. */
export const artists: OverviewArtist[] = [
  {
    "id": "6817a846-a83f-48d9-bd2d-517c8ef9bb88",
    "slug": "akshay-mahajan",
    "name": "Akshay Mahajan",
    "exhibitionName": "People of Clay",
    "image": "/images/foam/akshay-overview-page.png",
    "alt": "Image of a woman sitting on a concrete block, framed by two black and white identical portraits of a young woman. © Akshay Mahajan",
    "title": "From the series People of Clay",
    "copyright": "Akshay Mahajan",
    "position": {
      "x": -4.5,
      "y": 0,
      "z": -12
    },
    "frameBackgroundColor": "#ffffff",
    "frameHighlightColor": "#E98822",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -23,
          "y": 6,
          "z": -17
        },
        "connections": []
      },
      {
        "name": "Collage",
        "position": {
          "x": 28,
          "y": -1,
          "z": -15
        },
        "connections": [
          {
            "x": 28,
            "y": 3,
            "z": -15
          }
        ]
      }
    ]
  },
  {
    "id": "419fe05f-e94f-42a4-a64e-67279421e489",
    "slug": "eleonora-agostini",
    "name": "Eleonora Agostini",
    "exhibitionName": "A Study on Waitressing",
    "image": "/images/foam/eleonora-archival-6.jpg",
    "alt": "Archival image of the artist's mother, as a waitress, standing behind a table full of flowers, plates and pies. © Eleonora Agostini",
    "title": "From the series A Study on Waitressing",
    "copyright": "Eleonora Agostini",
    "position": {
      "x": -13,
      "y": 0.5,
      "z": -8
    },
    "frameBackgroundColor": "#ffffff",
    "frameHighlightColor": "#CE584E",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -25.5,
          "y": 10,
          "z": -17
        },
        "connections": [
          {
            "x": -30,
            "y": 11,
            "z": -17
          },
          {
            "x": -25,
            "y": 15,
            "z": -17
          },
          {
            "x": -23,
            "y": 6,
            "z": -17
          },
          {
            "x": -20,
            "y": 13,
            "z": -17
          }
        ]
      },
      {
        "name": "Collage",
        "position": {
          "x": 40,
          "y": -1.5,
          "z": -15
        },
        "connections": []
      },
      {
        "name": "Collaborative",
        "position": {
          "x": -33,
          "y": 3,
          "z": -4
        },
        "connections": [
          {
            "x": -35,
            "y": 0,
            "z": -4
          }
        ]
      }
    ]
  },
  {
    "id": "36d6f92a-e284-4e84-be57-b43d10c39a96",
    "slug": "shwe-wutt-hmon",
    "name": "Shwe Wutt Hmon",
    "exhibitionName": "I Do Miss Hospital Visit",
    "image": "/images/foam/shwe-overview-page.jpeg",
    "alt": "Collage image of scanned body parts. © Shwe Wutt Hmon",
    "title": "From the series I Do Miss Hospital Visit",
    "copyright": "Shwe Wutt Hmon",
    "position": {
      "x": -7,
      "y": -3.5,
      "z": -5
    },
    "frameBackgroundColor": "#F3FEC5",
    "frameHighlightColor": "#000000",
    "filters": [
      {
        "name": "Collage",
        "position": {
          "x": 36,
          "y": -3.5,
          "z": -15
        },
        "connections": [
          {
            "x": 40,
            "y": -1.5,
            "z": -15
          },
          {
            "x": 34,
            "y": 0,
            "z": -15
          },
          {
            "x": 28,
            "y": -1,
            "z": -15
          }
        ]
      },
      {
        "name": "Plants",
        "position": {
          "x": -13.5,
          "y": 16.5,
          "z": 8
        },
        "connections": [
          {
            "x": -19,
            "y": 16,
            "z": 8
          },
          {
            "x": -15,
            "y": 13,
            "z": 8
          }
        ]
      }
    ]
  },
  {
    "id": "2afa3f49-bf22-4893-873b-4cfd065ea402",
    "slug": "florian-braakman",
    "name": "Florian Braakman",
    "exhibitionName": "Broer",
    "image": "/images/foam/florian-overview-page.jpg",
    "alt": "Portrait of a man in Delfshaven, Rotterdam. © Florian Braakman",
    "title": "From the series Broer (2017 – present)",
    "copyright": "Florian Braakman",
    "position": {
      "x": -12,
      "y": -1,
      "z": -15.5
    },
    "frameBackgroundColor": "#f3f3f3",
    "frameHighlightColor": "#2362B7",
    "filters": [
      {
        "name": "Portrait",
        "position": {
          "x": 12,
          "y": 24,
          "z": -5
        },
        "connections": [
          {
            "x": 18,
            "y": 23,
            "z": -5
          }
        ]
      },
      {
        "name": "Collaborative",
        "position": {
          "x": -27,
          "y": 3,
          "z": -4
        },
        "connections": [
          {
            "x": -26,
            "y": -2,
            "z": -4
          },
          {
            "x": -33,
            "y": 3,
            "z": -4
          }
        ]
      }
    ]
  },
  {
    "id": "ed9d5845-9548-4234-95a1-8b8c9333c8f6",
    "slug": "aaryan-sinha",
    "name": "Aaryan Sinha",
    "exhibitionName": "This Isn't Divide and Conquer",
    "image": "/images/foam/2u1a6607.jpg",
    "alt": "Portrait of a topless man, holding a block of sand in front of his face, inside a sandstone © Aaryan Sinha",
    "title": "In a Sandstone Mine",
    "copyright": "Aaryan Sinha",
    "position": {
      "x": -6.25,
      "y": -3.5,
      "z": -11
    },
    "frameBackgroundColor": "#FA86A9",
    "frameHighlightColor": "#ffffff",
    "filters": [
      {
        "name": "Landscape",
        "position": {
          "x": -14,
          "y": -7,
          "z": 7
        },
        "connections": [
          {
            "x": -13,
            "y": -11,
            "z": 7
          },
          {
            "x": -20,
            "y": -7,
            "z": 7
          }
        ]
      }
    ]
  },
  {
    "id": "ab800bff-1832-4271-bb26-56a1b38285d8",
    "slug": "sheung-yiu",
    "name": "Sheung Yiu",
    "exhibitionName": "(Inter)Faces of Predictions",
    "image": "/images/foam/point.jpg",
    "alt": "Close-up of the artist's face in front of a green background, with three red arrows pointing at his eye © Sheung Yiu",
    "title": "Fortune in My Thirties (2023), from the series Interfaces of Predictions",
    "copyright": "Sheung Yiu",
    "position": {
      "x": -2,
      "y": -7,
      "z": -12
    },
    "frameBackgroundColor": "#ffffff",
    "frameHighlightColor": "#83CE57",
    "filters": [
      {
        "name": "Portrait",
        "position": {
          "x": 14,
          "y": 19,
          "z": -5
        },
        "connections": [
          {
            "x": 15,
            "y": 15,
            "z": -5
          },
          {
            "x": 12,
            "y": 24,
            "z": -5
          },
          {
            "x": 18,
            "y": 23,
            "z": -5
          },
          {
            "x": 9,
            "y": 16,
            "z": -5
          },
          {
            "x": 19,
            "y": 19,
            "z": -5
          },
          {
            "x": 8,
            "y": 22,
            "z": -5
          }
        ]
      },
      {
        "name": "Digital Manipulation",
        "position": {
          "x": -15,
          "y": 7,
          "z": -13
        },
        "connections": [
          {
            "x": -18,
            "y": 13,
            "z": -13
          },
          {
            "x": -19,
            "y": 9,
            "z": -13
          },
          {
            "x": -14,
            "y": 12,
            "z": -13
          }
        ]
      }
    ]
  },
  {
    "id": "11be2bc2-6809-43c2-bbfb-239265419ee4",
    "slug": "marisol-mendez",
    "name": "Marisol Mendez",
    "exhibitionName": "MADRE",
    "image": "/images/foam/durazno.jpg",
    "alt": "Abstract image of a peach plant in front of a blue surface © Marisol Mendez",
    "title": "Durazno, from the series Madre",
    "copyright": "Marisol Mendez",
    "position": {
      "x": 5,
      "y": -4,
      "z": -14
    },
    "frameBackgroundColor": "#907ED8",
    "frameHighlightColor": "#ffffff",
    "filters": [
      {
        "name": "Portrait",
        "position": {
          "x": 9,
          "y": 16,
          "z": -5
        },
        "connections": [
          {
            "x": 15,
            "y": 15,
            "z": -5
          }
        ]
      },
      {
        "name": "Collaborative",
        "position": {
          "x": -31,
          "y": -2,
          "z": -4
        },
        "connections": [
          {
            "x": -26,
            "y": -2,
            "z": -4
          },
          {
            "x": -35,
            "y": 0,
            "z": -4
          },
          {
            "x": -33,
            "y": 3,
            "z": -4
          },
          {
            "x": -27,
            "y": 3,
            "z": -4
          }
        ]
      }
    ]
  },
  {
    "id": "79be3986-d355-43eb-85d7-0b05ab474dd2",
    "slug": "issam-larkat",
    "name": "Issam Larkat",
    "exhibitionName": "Frantz Fanon, Me, and The Questions",
    "image": "/images/foam/issam-overview-page.jpg",
    "alt": "Archival Portrait of Frantz Fanon, with his adopted name (Omar Ibrahim) written over his eyes. © Issam Larkat",
    "title": "From the series Frantz Fanon, Me, and The Questions",
    "copyright": "Issam Larkat",
    "position": {
      "x": 6.5,
      "y": -8,
      "z": -10
    },
    "frameBackgroundColor": "#000000",
    "frameHighlightColor": "#ffffff",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -25,
          "y": 15,
          "z": -17
        },
        "connections": [
          {
            "x": -30,
            "y": 11,
            "z": -17
          },
          {
            "x": -20,
            "y": 13,
            "z": -17
          }
        ]
      },
      {
        "name": "Illustration",
        "position": {
          "x": 17,
          "y": -16,
          "z": -1
        },
        "connections": [
          {
            "x": 13,
            "y": -14,
            "z": -1
          }
        ]
      },
      {
        "name": "Collage",
        "position": {
          "x": 38,
          "y": 4,
          "z": -15
        },
        "connections": [
          {
            "x": 28,
            "y": 3,
            "z": -15
          },
          {
            "x": 34,
            "y": 0,
            "z": -15
          },
          {
            "x": 40,
            "y": -1.5,
            "z": -15
          },
          {
            "x": 42,
            "y": 4,
            "z": -15
          }
        ]
      }
    ]
  },
  {
    "id": "6ab3995c-6393-4d9f-b950-3eb08e338d20",
    "slug": "xin-li",
    "name": "Xin Li",
    "exhibitionName": "MAGIC WAND TOOL",
    "image": "/images/foam/li-overview-page.jpg",
    "alt": "Distorted and digitally edited collage, showing human silhouettes. One dark silhouette in the middle seems to hold a white A4 paper. © Xin Li",
    "title": "Students of Tsinghua University showing their prestige with an a4 white paper.",
    "copyright": "Xin Li",
    "position": {
      "x": 7,
      "y": -3,
      "z": -4.5
    },
    "frameBackgroundColor": "#1F1E4D",
    "frameHighlightColor": "#ffffff",
    "filters": [
      {
        "name": "Collage",
        "position": {
          "x": 42,
          "y": 4,
          "z": -15
        },
        "connections": [
          {
            "x": 40,
            "y": -1.5,
            "z": -15
          }
        ]
      },
      {
        "name": "Digital Manipulation",
        "position": {
          "x": -19,
          "y": 9,
          "z": -13
        },
        "connections": []
      }
    ]
  },
  {
    "id": "81323501-c0aa-4286-bf27-dfcfa7c00751",
    "slug": "cristobal-ascencio",
    "name": "Cristóbal Ascencio",
    "exhibitionName": "Las flores mueren dos veces",
    "image": "/images/foam/margarito.jpg",
    "alt": "Archival portrait of the artist's father, with manipulated pixels wiping out the face © Cristóbal Ascencio Ramos",
    "title": "Margarito, from the series Las Flores Mueren Dos Veces. Data bending on archival photography.",
    "copyright": "Cristóbal Ascencio Ramos",
    "position": {
      "x": 11,
      "y": 2,
      "z": -19
    },
    "frameBackgroundColor": "#1E1E1E",
    "frameHighlightColor": "#F9DCA1",
    "filters": [
      {
        "name": "Plants",
        "position": {
          "x": -19,
          "y": 16,
          "z": 8
        },
        "connections": [
          {
            "x": -15,
            "y": 13,
            "z": 8
          }
        ]
      },
      {
        "name": "Digital Manipulation",
        "position": {
          "x": -14,
          "y": 12,
          "z": -13
        },
        "connections": []
      }
    ]
  },
  {
    "id": "cb9c5628-4792-45ef-8355-a15e4899e0c2",
    "slug": "sander-coers",
    "name": "Sander Coers",
    "exhibitionName": "POST",
    "image": "/images/foam/sandercoers_post_011.jpeg",
    "alt": "A.I. generated collaged image of a Black man running through a field of flowers © Sander Coers",
    "title": "From the series POST, 2023",
    "copyright": "Sander Coers",
    "position": {
      "x": 15.5,
      "y": -1,
      "z": -20
    },
    "frameBackgroundColor": "#FAE9D7",
    "frameHighlightColor": "#194d25",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -19,
          "y": 7.5,
          "z": -17
        },
        "connections": [
          {
            "x": -14,
            "y": 10,
            "z": -17
          },
          {
            "x": -23,
            "y": 6,
            "z": -17
          },
          {
            "x": -20,
            "y": 13,
            "z": -17
          }
        ]
      },
      {
        "name": "Digital Manipulation",
        "position": {
          "x": -18,
          "y": 13,
          "z": -13
        },
        "connections": [
          {
            "x": -19,
            "y": 9,
            "z": -13
          },
          {
            "x": -14,
            "y": 12,
            "z": -13
          }
        ]
      }
    ]
  },
  {
    "id": "32eb4450-2ec6-4774-9773-72c67dc26fd4",
    "slug": "amin-yousefi",
    "name": "Amin Yousefi",
    "exhibitionName": "Eyes Dazzle as they Search for the Truth ",
    "image": "/images/foam/amin-overview-page.jpg",
    "alt": "Black and white close-up image of an existing photograph, showing a woman staring into the camera. Shot through a magnifying lens © Amin Yousefi",
    "title": "Untitled from Eyes Dazzle As they Search for The Truth.",
    "copyright": "Amin Yousefi. Source: David Burnett, 44 Days: Iran and the Remaking of the World (Page 90)",
    "position": {
      "x": 15,
      "y": 2,
      "z": -13
    },
    "frameBackgroundColor": "#000000",
    "frameHighlightColor": "#d9d9d9",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -14,
          "y": 10,
          "z": -17
        },
        "connections": [
          {
            "x": -20,
            "y": 13,
            "z": -17
          }
        ]
      },
      {
        "name": "Portrait",
        "position": {
          "x": 15,
          "y": 15,
          "z": -5
        },
        "connections": []
      }
    ]
  },
  {
    "id": "3ff6d9a9-4067-4ed0-980c-48fb3a9ba178",
    "slug": "rehab-eldalil",
    "name": "Rehab Eldalil",
    "exhibitionName": "The Longing of the Stranger Whose Path Has Been Broken شوق الغريب للي تقطّع سبيله",
    "image": "/images/foam/the-longing_rehab-eldalil_5.jpeg",
    "alt": "Three women of the Bedouin community in South Sinai, Egypt, herd their sheep across the moutains. They stand in a line with their arms spread out, overseeing the valley. © Rehab Eldalil",
    "title": "From the series The Longing of the Stranger Whose Path Has Been Broken",
    "copyright": "Rehab Eldalil",
    "position": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "frameBackgroundColor": "#f4efc9",
    "frameHighlightColor": "#3F6631",
    "filters": [
      {
        "name": "Landscape",
        "position": {
          "x": -13,
          "y": -11,
          "z": 7
        },
        "connections": []
      },
      {
        "name": "Plants",
        "position": {
          "x": -15,
          "y": 13,
          "z": 8
        },
        "connections": []
      },
      {
        "name": "Collaborative",
        "position": {
          "x": -26,
          "y": -2,
          "z": -4
        },
        "connections": []
      }
    ]
  },
  {
    "id": "a6f499c8-b57f-4a57-acac-2395d5d906de",
    "slug": "cansu-yildiran",
    "name": "Cansu Yıldıran",
    "exhibitionName": "Fathom",
    "image": "/images/foam/fathom_cansuyildiran_2023_00023.jpg",
    "alt": "Portrait of a nude person, coloured in red light, in between large plants © Cansu Yıldıran",
    "title": "From the series Fathom",
    "copyright": "Cansu Yıldıran",
    "position": {
      "x": -3,
      "y": 8.5,
      "z": -12
    },
    "frameBackgroundColor": "#130506",
    "frameHighlightColor": "#FF3535",
    "filters": [
      {
        "name": "Collaborative",
        "position": {
          "x": -35,
          "y": 0,
          "z": -4
        },
        "connections": []
      },
      {
        "name": "Portrait",
        "position": {
          "x": 19,
          "y": 19,
          "z": -5
        },
        "connections": [
          {
            "x": 18,
            "y": 23,
            "z": -5
          },
          {
            "x": 15,
            "y": 15,
            "z": -5
          }
        ]
      }
    ]
  },
  {
    "id": "fd08a5f9-4925-4a47-950b-e813e05df26d",
    "slug": "jaclyn-wright",
    "name": "Jaclyn Wright",
    "exhibitionName": "High Visibility (Blaze Orange)",
    "image": "/images/foam/jaclyn-overview-page.jpg",
    "alt": "Collage of several images of West Desert landscapes, covered in orange arrows. © Jaclyn Wright",
    "title": "From the series Blaze Orange / High Visibility",
    "copyright": "Jaclyn Wright",
    "position": {
      "x": 4,
      "y": 6,
      "z": -9
    },
    "frameBackgroundColor": "#E4EEFA",
    "frameHighlightColor": "#FF6600",
    "filters": [
      {
        "name": "Landscape",
        "position": {
          "x": -18,
          "y": -13,
          "z": 7
        },
        "connections": [
          {
            "x": -13,
            "y": -11,
            "z": 7
          }
        ]
      },
      {
        "name": "Collage",
        "position": {
          "x": 34,
          "y": 0,
          "z": -15
        },
        "connections": [
          {
            "x": 28,
            "y": 3,
            "z": -15
          },
          {
            "x": 40,
            "y": -1.5,
            "z": -15
          }
        ]
      }
    ]
  },
  {
    "id": "843ace42-0c00-4edb-a07e-3c70086b9367",
    "slug": "ricardo-nagaoka",
    "name": "Ricardo Nagaoka",
    "exhibitionName": "autobiographies",
    "image": "/images/foam/ricardo-overview-page.jpg",
    "alt": "Black and white portrait of a man's face, eyes closed and mouth gaping. Part of his tattooed chest is visible and he wears a silver earring in his right ear lobe. His face is framed by two hands, grasping his head and squeezing his cheeks. In the background, half of the face of another person is visible. © Ricardo Nagaoka",
    "title": "Squeeze (Justin), 2022",
    "copyright": "Ricardo Nagaoka",
    "position": {
      "x": -5,
      "y": 4.5,
      "z": -15
    },
    "frameBackgroundColor": "#024442",
    "frameHighlightColor": "#ffffff",
    "filters": [
      {
        "name": "Portrait",
        "position": {
          "x": 18,
          "y": 23,
          "z": -5
        },
        "connections": []
      }
    ]
  },
  {
    "id": "f070d4b9-29e8-4e04-8484-ae809b4a082d",
    "slug": "thero-makepe",
    "name": "Thero Makepe",
    "exhibitionName": "We Didn't Choose to be Born Here",
    "image": "/images/foam/thero-overview-page.jpg",
    "alt": "Photograph of a Black woman in front of a stone wall, pointing her finger as if it were a gun © Thero Makepe",
    "title": "Under Surveillance, 2021, from the series We Didn't Choose to be Born Here",
    "copyright": "Thero Makepe",
    "position": {
      "x": 2,
      "y": 4,
      "z": -11
    },
    "frameBackgroundColor": "#667643",
    "frameHighlightColor": "#EFE9D7",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -30,
          "y": 11,
          "z": -17
        },
        "connections": []
      },
      {
        "name": "Landscape",
        "position": {
          "x": -23,
          "y": -10,
          "z": 7
        },
        "connections": [
          {
            "x": -20,
            "y": -7,
            "z": 7
          },
          {
            "x": -18,
            "y": -13,
            "z": 7
          },
          {
            "x": -14,
            "y": -7,
            "z": 7
          },
          {
            "x": -13,
            "y": -11,
            "z": 7
          }
        ]
      },
      {
        "name": "Portrait",
        "position": {
          "x": 8,
          "y": 22,
          "z": -5
        },
        "connections": [
          {
            "x": 12,
            "y": 24,
            "z": -5
          },
          {
            "x": 9,
            "y": 16,
            "z": -5
          }
        ]
      }
    ]
  },
  {
    "id": "7ffefcf8-82be-40e5-86f3-54d6ad1953b9",
    "slug": "andre-ramos-woodard",
    "name": "André Ramos-Woodard",
    "exhibitionName": "BLACK SNAFU",
    "image": "/images/foam/authenticity-2-chainz.jpg",
    "alt": "Photo of a pair of hands with rings in prayer gesture, holding a chain that spells 'Cultural Experience', in front of a pink silky background. © André Ramos-Woodard",
    "title": "Authenticity (2 CHAINZ), 2022, from the series BLACK SNAFU",
    "copyright": "André Ramos-Woodard",
    "position": {
      "x": -7,
      "y": 4,
      "z": -7
    },
    "frameBackgroundColor": "#EFFDFD",
    "frameHighlightColor": "#e30613",
    "filters": [
      {
        "name": "Illustration",
        "position": {
          "x": 13,
          "y": -14,
          "z": -1
        },
        "connections": []
      }
    ]
  },
  {
    "id": "206f7be6-2873-47f6-b728-daacc2819ebf",
    "slug": "maryam-touzani",
    "name": "MAryam Touzani",
    "exhibitionName": "Argania: Lack of Information Is My Family History",
    "image": "/images/foam/maryam-overview-page.jpg",
    "alt": "Blue-toned image of two little boys, overlaying a map. © MAryam Touzani",
    "title": "From the series: Argania: Lack of Information Is My Family History",
    "copyright": "MAryam Touzani",
    "position": {
      "x": -10,
      "y": 6,
      "z": -5
    },
    "frameBackgroundColor": "#FBE6DD",
    "frameHighlightColor": "#263062",
    "filters": [
      {
        "name": "Archival",
        "position": {
          "x": -20,
          "y": 13,
          "z": -17
        },
        "connections": []
      },
      {
        "name": "Collage",
        "position": {
          "x": 28,
          "y": 3,
          "z": -15
        },
        "connections": []
      }
    ]
  },
  {
    "id": "ca89912e-691c-4978-bc83-1d829d38c593",
    "slug": "andrea-orejarena-caleb-stein",
    "name": "Andrea Orejarena & Caleb Stein",
    "exhibitionName": "American Glitch",
    "image": "/images/foam/orejarena-stein-overview-page.jpg",
    "alt": "orejarena-stein-overview-page",
    "title": "",
    "copyright": "",
    "position": {
      "x": 7,
      "y": 4,
      "z": -5
    },
    "frameBackgroundColor": "#ffffff",
    "frameHighlightColor": "#39ff14",
    "filters": [
      {
        "name": "Landscape",
        "position": {
          "x": -20,
          "y": -7,
          "z": 7
        },
        "connections": []
      }
    ]
  }
];
