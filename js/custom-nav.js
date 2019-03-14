/**
 * 分页组件
 *  v-model：
 *  绑定一个当前页数 Number类型
 *
 *  props：
 *  page_count   Number类型  分页总数
 */
const tpl = `
    <ul class="custom-nav foot-page ">
        <li><p>{{page_index}}/{{page_count}}</p></li>
        <li><button :disabled="page_index <= 1" class="pagePre"  @click="prevpage()"></button></li>
        <li><button class="pageNext" @click="nextpage()"></button></li>
        <li><input type="text"  v-model="choice_index" @keyup="onlyNum"  @keyup.enter="nextenter(choice_index)"></li>
        <li><button class="skip" @click="nextpage(choice_index)">跳转</button></li>
    </ul>
    `;

Vue.component('custom-nav', {
    name: 'custom-nav',
    template: tpl,
    // props: ['value','page_count'],
    props: {
        value: {},
        page_count: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            page_index: this.value,
            // page_index: '1',
            choice_index: 1
        };
    },
    watch: {
        value(val) {
            this.page_index = Number(val);
            this.choice_index = Number(val);
        }
    },
    created() {
        this.choice_index = this.value;
    },
    methods: {
        nextpage: function (num) {
            if (num) {
                if (num > this.page_count) {
                    return;
                }
                this.page_index = parseInt(num, 10);
            } else {
                this.page_index = parseInt(this.page_index, 10) + 1;
                if (this.page_index > this.page_count) {
                    this.page_index = this.page_count;
                    return;
                }
            }
            this.$emit('input', this.page_index);
            this.choice_index = 1;
        },
        nextenter: function (num) {
            if (num) {
                this.nextpage(num);
            }
        },
        prevpage: function () {
            if (this.page_index <= 1) {
                return;
            }
            this.page_index--;
            this.nextpage(this.page_index);
        },
        // 输入框只能是数字
        onlyNum: function () {
            const num = parseInt(this.choice_index, 10);
            this.choice_index = (typeof num).toUpperCase() === 'NUMBER' && !isNaN(num) ? num : '';
        }
    }
});
