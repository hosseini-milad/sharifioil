function FilterPart(){
    return(
    <div className="resultFilter">
        <div className="resultCount">8 نتیجه</div>
        <div className="filterSortBy">
          <label>جستجو بر اساس:</label>
          <select className="filterSort" >
              <option>محبوب ترین</option>
              <option>سایز برچسب: صعودی</option>
              <option>سایز برچسب: نزولی</option>
              <option>Product Number: Ascending</option>
              <option>Product Number: Descending</option>
            </select>
            <div className="filterButtons">
                <a className="filterBtn categoryFilterButton">
                    <i className="fas fa-filter"></i> فیلتر
                </a>
            </div>
        </div>
        
        </div>
        )
}
export default FilterPart