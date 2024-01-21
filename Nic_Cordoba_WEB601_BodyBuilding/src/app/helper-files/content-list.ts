import { Content } from './content-interface';

class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  // Getter function
  getContentArray(): Content[] {
    return this.contentArray;
  }

  // Add function
  addContent(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  // Function to return the number of items in the array
  getNumberOfItems(): number {
    return this.contentArray.length;
  }

  // Function to get reader-friendly HTML output for a content item at a given index
  getContentHtml(index: number): string {
    if (index >= 0 && index < this.contentArray.length) {
      const { title, description, creator, imageURL, type, tags } = this.contentArray[index];

      // Generate an image tag using imageURL (if available)
      const imageTag = imageURL ? `<img src="${imageURL}" alt="${title}" width="100" height="100">` : '';

      // Generate tags list (if available)
      const tagsList = tags ? `<strong>Tags:</strong> ${tags.join(', ')}<br>` : '';

      // Return reader-friendly HTML output
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
      return 'Index out of bounds.';
    }
  }
}

export { ContentList };
