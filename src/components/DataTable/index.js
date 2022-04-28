import React from 'react'
import { MDBDataTable } from 'mdbreact'

function DataTable(options=null, entry=null, amount=null, dataset) {
  return (
    <MDBDataTable striped entriesOptions={options} entries={entry} pagesAmount={amount} data={dataset} />
  )
}

export default DataTable