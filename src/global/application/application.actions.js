import { UPDATE_KICK_OFF_DATA } from './application.constants';

export const updateKickOffData = data => ({
  type: UPDATE_KICK_OFF_DATA,
  data,
});
