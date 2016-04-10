import NewTodo from './modules/NewTodo';
import List from './modules/List';
import Footer from './modules/Footer';

import appMounted from './signals/appMounted';

export default () => {
  return (module, controller) => {
    module.addModules({
      new: NewTodo(),
      list: List(),
      footer: Footer(),
    });

    module.addSignals({
      appMounted,
    });

    controller.on('modulesLoaded', () => {
      controller.getSignals().app.appMounted({}, {immediate: true});
    });
  };
};
