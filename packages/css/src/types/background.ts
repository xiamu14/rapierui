export class Url {
  private _src: string;
  constructor(src: string) {
    this._src = src;
  }
  /**
   * get value
   */
  public get value() {
    return `url:${this._src}`;
  }
}

export interface LinearGradient {}

export type Image = (Url | LinearGradient)[];
