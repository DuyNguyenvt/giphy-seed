import * as _ from 'lodash';
function procService(service: any) {
  const setState = (newObject: any) => {
    const cloneState = { ...service.state };
    const newState = { ...cloneState, ...newObject };
    service.state = newState;
  };
  return {
    setState,
  };
}

export { procService };
