import React from 'react';
import {Decorator as Cerebral, Link} from 'cerebral-view-react';
import counts from '../../computed/counts.js';

@Cerebral({
  filter: ['app', 'footer', 'filter'],
  counts,
})
class TodosFooter extends React.Component {
  renderRemainingCount() {
    const count = this.props.counts.remainingCount;
    if (count === 0 || count > 1) {
      return `${count} items left`;
    }
    return `${count} items left`;
  }

  renderRouteClass(filter) {
    return this.props.filter === filter ? 'selected' : '';
  }

  renderCompletedButton() {
    return (
      <button className="clear-completed" onClick={() => this.props.signals.app.footer.clearCompletedClicked()}>
        Clear completed ({this.props.counts.completedCount})
      </button>
    );
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.renderRemainingCount()}</strong></span>
        <ul className="filters">
          <li>
            <Link className={this.renderRouteClass('all')} signal="app.footer.filterClicked">All</Link>
          </li>
          <li>
            <Link className={this.renderRouteClass('active')} signal="app.footer.filterClicked" params={{filter: 'active'}}>Active</Link>
          </li>
          <li>
            <Link className={this.renderRouteClass('completed')} signal="app.footer.filterClicked" params={{filter: 'completed'}}>Completed</Link>
          </li>
        </ul>
        {this.props.counts.completedCount ? this.renderCompletedButton() : null}
      </footer>
    );
  }

}

export default TodosFooter;
