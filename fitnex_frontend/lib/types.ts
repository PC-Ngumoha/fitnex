import LoginUserForm from '@/components/LoginUserForm';

export type ExerciseProps = {
    id: number;
    bodyPart_id: number;
    target_id: number;
    name: string;
    gifUrl: string;
    equipments_id: number;
    bodyPart_data: string,
    target_data: string;
    equipment_data: string;
};

export type ExcerciseDetail = ExerciseProps & {

    secondaryMuscles: string[];
    instructions: string[];
};

export type BodyPartProps = {
    id: number,
    name: string,
};

export type TargetProps = {
    id: number,
    name: string,
};

export type EquipmentProps = {
    id: number,
    name: string,
};


export type Feature = {
    name: string,
    time?: string,
    exp?: string,
    image?: string,
    alt?: string,
    color? : string,
    description: string,
}

export type User = {
    name: string,
    email: string,
    id: string
    avatar?: string,
    date_joined: string,
}

export type UserResponse = {
    user: User | null
    status: string,
    access_token: string,
}

