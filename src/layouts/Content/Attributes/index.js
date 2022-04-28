import React from 'react'

function AttributesLayout({
    handleCategoryChange,
    handleCategoryImage,
    handleCategorySubmit,
    uploadCategoryImage,
    catButtonText,
    CategoryDataTable,
    categoryForm,
    subCategoryForm,
    handleSubCategory,
    submitSubCategory,
    SubCategoryTable,
    subCatButtonText,
    categories,
    categorySelect
}) {
  return ( 
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Attributes</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Attributes</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                        <div className="card-title mb-3">Add Category</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-4">
                                    <label htmlFor="title">Label</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="label" 
                                        value={categoryForm.label}
                                        onChange={handleCategoryChange} 
                                        placeholder="Label" 
                                    />
                                </div>
 
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="icon">Image/Icon</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="image" 
                                        defaultValue={categoryForm.image}
                                        // defaultValue={categoryImageURL} 
                                        placeholder="Link to Icon or Image for Category" 
                                    />
                                </div>
                                <div className="col-md-12 input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" name="image" onChange={handleCategoryImage} id="inputGroupFile02" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="" onClick={uploadCategoryImage}>Upload</span>
                                    </div>
                                </div>

                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        row="3" 
                                        name="description" 
                                        value={categoryForm.description}
                                        onChange={handleCategoryChange} 
                                        placeholder="Description">
                                    </textarea>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary" type="submit" onClick={handleCategorySubmit}>{catButtonText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                {CategoryDataTable}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                        <div className="card-title mb-3">Add Sub Category</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-2">
                                    <label htmlFor="title">Label</label>
                                    <input className="form-control" type="text" name="label" value={subCategoryForm.label} onChange={handleSubCategory} placeholder="Label" />
                                </div>

                                <div className="col-md-12 form-group mb-2">
                                    <label htmlFor="slug">Slug (optional)</label>
                                    <input className="form-control" type="text" name="slug" value={subCategoryForm.slug} onChange={handleSubCategory} placeholder="Slug" />
                                </div>

                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="category">Category</label>
                                    <select className="form-control" value={subCategoryForm.category_id} onChange={categorySelect}>
                                        <option> Select Category</option>
                                        {categories.map((item, index) => (
                                            <option key={index} value={item._id}>{item.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" row="3" name="description" value={subCategoryForm.description} onChange={handleSubCategory} placeholder="Description"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary" type="submit" onClick={submitSubCategory} >{subCatButtonText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                {SubCategoryTable}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AttributesLayout