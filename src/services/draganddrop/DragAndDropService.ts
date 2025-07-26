class DragAndDropService {
  private data: any = null;

  getData(): any {
    return this.data;
  }

  setData(value: any) {
    this.data = value;
  }

  clearData() {
    this.data = null;
  }
}

export const dragAndDropService = new DragAndDropService();
