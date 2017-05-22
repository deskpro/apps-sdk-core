import * as Events from './Events';

/**
 * @param {EventDispatcher} eventDispatcher
 * @return {DeskproAPIClient}
 */
export const create = (eventDispatcher) => new DeskproAPIClient(eventDispatcher);

export class DeskproAPIClient
{
  /**
   * @param {EventDispatcher} eventDispatcher
   */
  constructor(eventDispatcher) {
    this.props = { eventDispatcher };
  }

  get = (path) => this.props.eventDispatcher.emitAsync(Events.EVENT_WEBAPI_REQUEST_DESKPRO, { method: 'get', path});

  post = (path, body) => this.props.eventDispatcher.emitAsync(Events.EVENT_WEBAPI_REQUEST_DESKPRO, { method: 'post', path, body });

  put = (path, body) => this.props.eventDispatcher.emitAsync(Events.EVENT_WEBAPI_REQUEST_DESKPRO, { method: 'put', path, body });

  ['delete'] = (path, body) => this.props.eventDispatcher.emitAsync(Events.EVENT_WEBAPI_REQUEST_DESKPRO, { method: 'delete', path });

}