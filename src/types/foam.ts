// Types for the Foam Talent 2024 digital exhibition clone.

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** A category cluster anchor in the 3D overview scene. */
export interface Category {
  name: string;
  x: number;
  y: number;
  z: number;
}

/** Per-category placement of an artist when that filter is active, plus the
 *  network connection endpoints drawn from this node. */
export interface ArtistFilter {
  name: string;
  position: Vec3;
  connections: Vec3[];
}

/** One of the 20 selected artists shown in the 3D scatter overview. */
export interface OverviewArtist {
  id: string;
  slug: string;
  name: string;
  exhibitionName: string;
  image: string;
  alt: string;
  title: string;
  copyright: string;
  position: Vec3;
  frameBackgroundColor: string;
  frameHighlightColor: string;
  filters: ArtistFilter[];
}

// ---- Artist exhibition (OnlineExhibition) ----

export interface ExhibitionImageSection {
  uid: string;
  component: "OnlineExhibitionImage";
  backgroundColor: string;
  image: string;
  alt: string;
  top: number | null;
  left: number | null;
  height: number | null;
  sectionWidth: number | null;
  marginLeft: number;
  marginRight: number;
  freeImage: boolean;
  disableZoom: boolean;
  captionPosition: string;
  caption: string;
  credits: string;
  creditsItalicLead: boolean;
  modalHtml: string;
}

export interface ExhibitionVideoSection {
  uid: string;
  component: "OnlineExhibitionInlineVideo";
  backgroundColor: string;
  video: string;
  alt: string;
  title: string;
  height: number;
}

export interface ExhibitionProseSection {
  uid: string;
  component: "OnlineExhibitionProse";
  backgroundColor: string;
}

export type ExhibitionSection =
  | ExhibitionImageSection
  | ExhibitionVideoSection
  | ExhibitionProseSection;

export interface Exhibition {
  slug: string;
  artistName: string;
  exhibitionName: string;
  label: string;
  descriptionHtml: string;
  copyright: string;
  audio: { src: string; title: string; copyright: string };
  intro: {
    artistName: string;
    exhibitionName: string;
    textColor: string;
    backgroundColor: string;
  };
  nextExhibition: { name: string; slug: string; backgroundColor: string };
  sections: ExhibitionSection[];
}
