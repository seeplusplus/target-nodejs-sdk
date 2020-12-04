import * as runtime from '../runtime';
import { DeliveryRequest, DeliveryResponse } from '../models';
export interface ExecuteDeliveryRequest {
    imsOrgId: string;
    sessionId: string;
    deliveryRequest: DeliveryRequest;
    version?: string;
}
export declare class DeliveryAPIApi extends runtime.BaseAPI {
    executeRaw(requestParameters: ExecuteDeliveryRequest): Promise<runtime.ApiResponse<DeliveryResponse>>;
    execute(imsOrgId: string, sessionId: string, deliveryRequest: DeliveryRequest, version?: string): Promise<DeliveryResponse>;
}
