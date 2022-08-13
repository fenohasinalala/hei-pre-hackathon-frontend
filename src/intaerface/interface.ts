

export interface interfaceDate {
    name: string;
    position: string;
    office: string;
    age: string;
    date: string;
    salary: string;
}

export interface data {
    id: number;
    first_name: string;
    last_name: string;
    fr_C: number;
    fr_bacc: number;
    fr: number;
    math_C: number;
    math_bacc: number;
    math: number;
};

export interface dataReal {
    id: number;
    first_name: string;
    last_name: string;
    fr_C: number;
    fr_bacc: number;
    fr: number;
    math_C: number;
    math_bacc: number;
    math: number;
    status:string;
};

export interface session{
    id_concours: number;
    session: string;
    min_admission: number;
    min_liste_attente: number;
    min_math: number;
};