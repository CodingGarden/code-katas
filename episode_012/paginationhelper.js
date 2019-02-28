class PaginationHelper {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  pageItemCount(pageIndex) {
    if (pageIndex > this.pageCount() - 1) return -1;
    
    // if this is not the last page...
    if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    } else {
      return this.itemCount() - ((this.pageCount() - 1) * this.itemsPerPage);
    }
  }

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  pageIndex(itemIndex) {
    if (this.itemCount() == 0 || itemIndex < 0 || itemIndex > this.itemCount()) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// console.log(helper.pageCount(), 2);
// console.log(helper.itemCount(), 6);
// console.log(helper.pageItemCount(0), 4);
// console.log(helper.pageItemCount(1), 2);
// console.log(helper.pageItemCount(2), -1);

// // pageIndex takes an item index and returns the page that it belongs on

// console.log(helper.pageIndex(5), 1);
// console.log(helper.pageIndex(2), 0);
// console.log(helper.pageIndex(20), -1);
// console.log(helper.pageIndex(-10), -1);