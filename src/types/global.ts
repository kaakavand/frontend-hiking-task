export interface GalleryItemInterface {
  id: number;
  location: string;
  src: string;
  description: string;
  tags: string[];
  province: string;
  elevation: string;
  difficulty: string;
}

export type galleryType = GalleryItemInterface[];

export interface ModalProps {
  onClose: () => void;
}
