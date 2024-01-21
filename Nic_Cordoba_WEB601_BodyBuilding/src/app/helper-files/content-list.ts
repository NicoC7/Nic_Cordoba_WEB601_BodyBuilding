import { Content } from './content-interface';

class ContentList {
    private contentArray: Content[];
  
    constructor() {
      this.contentArray = [];
    }
  
    getContentArray(): Content[] {
      return this.contentArray;
    }
  
    addContent(contentItem: Content): void {
      this.contentArray.push(contentItem);
    }
  
    getNumberOfItems(): number {
      return this.contentArray.length;
    }
  
    getContentHtml(index: number): string {
      if (index >= 0 && index < this.contentArray.length) {
        const { title, description, creator, imageURL, type, tags } = this.contentArray[index];
  
        const imageTag = imageURL ? `<img src="${imageURL}" alt="${title}" width="100" height="100">` : '';
        const tagsList = tags ? `<strong>Tags:</strong> ${tags.join(', ')}<br>` : '';
  
        return `
          <div>
            <strong>Title:</strong> ${title}<br>
            <strong>Description:</strong> ${description}<br>
            <strong>Creator:</strong> ${creator}<br>
            ${tagsList}
            <strong>Type:</strong> ${type || 'Not specified'}<br>
            ${imageTag}
          </div>
        `;
      } else {
        return '<div style="color: red;">Error: Index out of bounds.</div>';
      }
    }
  }
  
  export { ContentList };