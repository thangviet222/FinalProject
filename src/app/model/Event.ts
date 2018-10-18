export class Event{
    id?:number;
    event_title: string;
    event_type_id: number;
    from_date: Date;
    to_date: Date;
    is_recurring: string;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    remarks?: string;
}