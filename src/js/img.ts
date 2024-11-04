import {QVueGlobals} from "quasar";
import {ussoAxios} from "src/js/myAxios";

export abstract class ImgBase {
  static get defaultUrl(): string {
    throw new Error("defaultUrl must be implemented in derived classes");
  }

  static sizeByDevice(q: QVueGlobals): number {
    throw new Error("sizeByDevice must be implemented in derived classes");
  }

  protected static getImgPath(md5: string, ext: string, size: number = 0) {

    let sizeFolder: number | string = size;
    if (ext === 'svg' || size === 0) sizeFolder = 'original'
    const md5Path = this.getMD5Path(md5)

    return `img/sized/${sizeFolder}/${md5Path}/${md5}.${ext}`
  }

  static getMD5Path(md5: string) {
    const subDir1 = md5.substring(0, 2);
    const subDir2 = md5.substring(2, 4);
    return subDir1 + '/' + subDir2;
  }

  static getSrc(md5: string, ext: string, size: number = 0) {
    if (!md5 || !ext) return this.defaultUrl;
    const url = ussoAxios.getApiUrl('');
    const path = this.getImgPath(md5, ext, size);
    return `${url}${path}`;
  }
}

export interface SketchITF {
  md5: string
  ext: string
  size?: number
}

export abstract class SketchBase extends ImgBase {
  static get defaultUrl(): string {
    return '/img/news/default_sketch.svg';
  }

  static path: string;

  static sizeByDevice(q: QVueGlobals): number {
    return q.platform.is.mobile ? 1080 : 260
  }

  static srcByProps(q: QVueGlobals, sketch?: SketchITF) {

    if (!sketch) return SketchBase.defaultUrl

    const md5 = sketch.md5
    const ext = sketch.ext
    const size = this.sizeByDevice(q)

    return this.getSrc(md5, ext, size)
  }

  static async unlink(q: QVueGlobals, id: number): Promise<boolean> {
    const params = {
      method: 'unlink',
      carrierId: id
    }
    return ussoAxios.set(q, this.path, params);
  }
}

export abstract class PhotoBase extends ImgBase {
  static get defaultUrl(): string {
    return '/img/news/default_sketch.svg';
  }



  static srcByProps(q: QVueGlobals, img?: SketchITF) {

    if (!img) return SketchBase.defaultUrl

    const md5 = img.md5
    const ext = img.ext
    const size = this.sizeByDevice(q)

    return this.getSrc(md5, ext, size)
  }

}


