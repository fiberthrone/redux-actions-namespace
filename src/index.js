import { createAction } from 'redux-actions';

export const createNamespace = (namespaceName) => {
  const createActionNs = (type, ...args) => createAction(`${namespaceName}${type}`, ...args);
  const createActionsNs = (...args) => {
    if (!args.every(arg => typeof arg === 'string')) {
      throw new Error('createActions: Expect all arguments to be strings. (Action maps are not supported.)');
    }

    return args.reduce((result, arg) => Object.assign(result, { [arg]: createActionNs(arg) }), {});
  };

  return {
    createAction: createActionNs,
    createActions: createActionsNs,
  };
};
