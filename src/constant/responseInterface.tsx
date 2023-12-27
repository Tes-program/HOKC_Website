export interface ApiResponse {
  data: {
    id: string;
    orgId: string;
    bookId: string;
    chapterId: string;
    bibleId: string;
    reference: string;
    content: {
      name: string;
      type: string;
      attrs: {
        style: string;
      };
      items: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: any;
        text?: string;
        name?: string;
        type?: string;
        attrs?: {
          style?: string;
          verseId: string;
          verseOrgIds: string[];
        };
        items?: ApiResponse['data']['content'];
      }[];
    }[];
    verseCount: number;
    copyright: string;
    next?: {
      id: string;
      number: string;
    };
    previous?: {
      id: string;
      number: string;
    };
  };
  meta: {
    fums: string;
    fumsId: string;
    fumsJsInclude: string;
    fumsJs: string;
    fumsNoScript: string;
  };
}
