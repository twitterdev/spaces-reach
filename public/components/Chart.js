class Chart extends Emitter {
  constructor(element) {
    super(element)
    this.render();
  }
  render() {console.log('render', this.component.dataset.data)}
}