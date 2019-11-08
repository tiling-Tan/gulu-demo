const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })

    describe('props',function () {
        it('接收autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接收closeButton', (done) => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text:'关闭',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        })
        it('接收enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml:true
                }
            })
            vm.$slots.default = ['<h3 id="h3">helloworld</h3>']
            vm.$mount()
            let h3 = vm.$el.querySelector('#h3')
            expect(h3).to.exist
        })
        it('接收position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position:'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })



})