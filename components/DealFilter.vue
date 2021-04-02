<template>
<div class="col-md-3 col-12 bg-white shadow rounded px-0">
    <div class="row mx-auto">
        <div class="col-12 px-0 text-left py-4 border border-bottom-0">
            <p class="pl-3 mb-0">Danh Mục</p>
        </div>
        <div class="col-12 px-0 text-center">
            <div class="accordion" id="accordionExample">
                <div class="card rounded-0 border-bottom">
                    <div class="card-header bg-white border-bottom-0" id="country">
                        <h2 class="mb-0 bg-white">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Thành phố
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="country" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="form-check text-left">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="hcm" value="option1" checked>
                                <label class="form-check-label" for="hcm">
                                    Hồ Chí Minh
                                </label>
                            </div>
                            <div class="form-check text-left">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="hanoi" value="option2">
                                <label class="form-check-label" for="hanoi">
                                    Hà Nội
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-0 border-top-0">
                    <div class="card-header bg-white border-bottom-0" id="category">
                        <h2 class="mb-0 bg-white">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Nhà Hàng
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="category" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="bunthitnuong">
                                <label class="form-check-label" for="bunthitnuong">
                                    Bún thịt nướng
                                </label>
                            </div>
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="bundau">
                                <label class="form-check-label" for="bundau">
                                    Bún Đậu
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-0 border-top-0">
                    <div class="card-header bg-white border-bottom-0" id="category">
                        <h2 class="mb-0 bg-white">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Món Lẩu
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="category" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="nuongtran">
                                <label class="form-check-label" for="nuongtran">
                                    Nướng mọi
                                </label>
                            </div>
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="nuongrieu">
                                <label class="form-check-label" for="nuongrieu">
                                    Nướng uớp
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-0 border-bottom">
                    <div class="card-header bg-white border-bottom-0" id="country">
                        <h2 class="mb-0 bg-white">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Quận
                            </button>
                        </h2>
                        </div>

                        <div id="collapseFour" class="collapse show" aria-labelledby="country" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="hoankiem">
                                <label class="form-check-label" for="hoankiem">
                                    Hoàn Kiếm
                                </label>
                            </div>
                            <div class="form-check text-left">
                                <input class="form-check-input" type="checkbox" value="" id="badinh">
                                <label class="form-check-label" for="badinh">
                                    Ba Đình
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-0 border-bottom">
                    <div class="card-header bg-white border-bottom-0" id="country">
                        <h2 class="mb-0 bg-white">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Khoảng giá
                            </button>
                        </h2>
                        </div>

                        <div id="collapseFive" class="collapse show" aria-labelledby="country" data-parent="#accordionExample">
                        <div class="card-body">
                           <p>Chưa làm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default ({
    
})
</script>