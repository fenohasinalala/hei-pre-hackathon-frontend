import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DonnerTable, { database } from './DonnerTable';

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

const DatatablePage = (numberDonner:number) => {
  const donner = DonnerTable();
  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Nom(s)',
        field: 'first_name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Prénom(s)',
        field: 'last_name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Français concours',
        field: 'fr_C',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Français Bacc',
        field: 'fr_bacc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Français: concours + Bacc',
        field: 'fr',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Math concours',
        field: 'math_C',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Math Bacc',
        field: 'math_bacc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Math: concours + Bacc',
        field: 'math',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      }
    ],
    rows: database
  };
  
  return (
    <MDBDataTable
      striped
      bordered
      hover
      small
      data={data}
    />
  );
}

export default DatatablePage;