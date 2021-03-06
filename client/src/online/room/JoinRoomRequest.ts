import { APIRequest, HttpMethod } from "../api/api_request";
import JoinRoomResponse from "./JoinRoomResponse";
import Room from "./Room";

export default class JoinRoomRequest extends APIRequest<JoinRoomResponse> {
  private room: Room;

  constructor(room: Room) {
    super();
    this.room = room;
  }

  prepare() {
    this.method = HttpMethod.PUT;
    this.path = `rooms/${this.room.id}/users/${this.user.id}`;
    this.addParam('password', this.room.password || '');
  }
}
