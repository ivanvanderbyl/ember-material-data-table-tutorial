import Component from '@ember/component'
type Column = {
  prop: string
  name: string
  align: 'start' | 'middle' | 'end'
}

export default class DataTable extends Component {
  classNames = ['rmwc-data-table']
  classNameBindings = [
    'hasStickyColumns:rmwc-data-table--sticky-columns',
    'hasStickyColumns:rmwc-data-table--sticky-columns-1',
    'hasStickyRows:rmwc-data-table--sticky-rows',
    'hasStickyRows:rmwc-data-table--sticky-rows-1',
    'stickRowsClassName',
  ]

  stickyColumns: 0 | 1 = 0
  stickyRows: 0 | 1 = 0

  data: any[] = []

  @computed('stickyColumns')
  get hasStickyColumns(): boolean {
    return !!this.stickyColumns
  }

  @computed('stickyRows')
  get hasStickyRows(): boolean {
    return !!this.stickyRows
  }

  @computed('stickyRows')
  get stickRowsClassName() {
    return `rmwc-data-table--sticky-rows-${this.stickyRows}`
  }

}
