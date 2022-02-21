import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';
function SideBar(){
    const handleInput=(e)=>{
        console.log(e)
    }
    return(<>
    <h3>فروشگاه</h3>
    <h4>بر اساس محصول</h4>
    <span>روغن موتور</span>
    <div className="filterCat">روغن موتور گازوئیلی</div>
    <Accordion preExpanded={['0']} allowZeroExpanded>
            <AccordionItem uuid={'0'}>
                <AccordionItemHeading>
                    <AccordionItemButton >
                        ویسکوزیته
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="sideBarFilters">
                      <ul>
                        <li><input
                        type="checkbox"
                        name="address"
                        value={12}
                        checked={true}
                        onChange={(e)=>handleInput(e)}
                    /><small className="filterValue">0W-20 <i> (5)</i></small></li>
                    <li><input
                        type="checkbox"
                        name="address"
                        value={12}
                        checked={false}
                        onChange={(e)=>handleInput(e)}
                    /><small className="filterValue">0W-20 <i> (5)</i></small></li>
                    <li><input
                        type="checkbox"
                        name="address"
                        value={12}
                        checked={false}
                        onChange={(e)=>handleInput(e)}
                    /><small className="filterValue">0W-20 <i> (5)</i></small></li>
                    <li><input
                        type="checkbox"
                        name="address"
                        value={12}
                        checked={false}
                        onChange={(e)=>handleInput(e)}
                    /><small className="filterValue">0W-20 <i> (5)</i></small></li>
                    </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'1'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        برند
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </>)
}
export default SideBar