function CartSidePart(){
    return(
        <div className="cartSideHandler">
            <div class="pt-3 float-md-left col-md-12 pl-0 pr-0">
   			 <h5 class="order-summary">نتیجه سفارش</h5>

        	<hr class="mb-3 d-md-none d-lg-block mt-0" />

        	<p class="textShipping">هزینه ارسال و مالیات در صفحه پرداخت محاسبه می شود</p>
        	<hr class="d-md-none d-lg-block" />
        	</div>
            <div class="cartTotals">
            <small>
                <p className="total-wrap">
                    جمع ارقام:<span>250.000 تومان</span>
                </p>
            </small>

            <h5 class="total-wrap totalPrice">
                جمع کل<span> 280.000 تومان</span>
            </h5>
            <a className="modal-sub-btn cartCheckOut">نهایی کردن سفارش</a>


		 </div>
        </div>
    )
}
export default CartSidePart