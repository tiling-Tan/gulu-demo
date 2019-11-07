const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在', () => {
        expect(Col).to.exist
    })
    it('接收span属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '1'
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收offset属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '2'
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收ipad属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:12,offset: 1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-12')).to.equal(true)
        expect(element.classList.contains('offset-ipad-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收narrowPc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-12')).to.equal(true)
        expect(element.classList.contains('offset-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-12')).to.equal(true)
        expect(element.classList.contains('offset-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收widePc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-12')).to.equal(true)
        expect(element.classList.contains('offset-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})