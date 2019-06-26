import Component from '@ember/component'
import { computed } from '@ember/object'

export default class DataTable extends Component {
  classNames = ['rmwc-data-table']
  classNameBindings = [
    'hasStickyColumns:rmwc-data-table--sticky-columns',
    'hasStickyColumns:rmwc-data-table--sticky-columns-1',
    'hasStickyRows:rmwc-data-table--sticky-rows',
    'hasStickyRows:rmwc-data-table--sticky-rows-1',
  ]

  stickyColumns: 0 | 1 = 0
  stickyRows: 0 | 1 = 0

  @computed('stickyColumns')
  get hasStickyColumns(): boolean {
    return !!this.stickyColumns
  }

  @computed('stickyRows')
  get hasStickyRows(): boolean {
    return !!this.stickyRows
  }
}
