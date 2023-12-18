
export type ExerciseProps = {
    id: number,
    name: string,
    gifUrl: string,
    secondaryMuscles: string[],
    instructions: string[],
}[]

export type BodyPart = {
    id: number,
    name: string,
}[];

export type Target = {
    id: number,
    name: string,
}[];

export type Equipment = {
    id: number,
    name: string,
}[];