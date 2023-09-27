import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface WaiterInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  shift_start_time: any;
  shift_end_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface WaiterGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;
}
