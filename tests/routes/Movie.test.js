import { shallowMount } from '@vue/test-utils'
import store from '~/store'
import router from '~/routes'
import loadImage from '~/plugins/loadImage'
import Movie from '~/routes/Movie'

describe('routes/Movie.vue', () => {
  let wrapper

  beforeEach(async () => {
    window.scrollTo = jest.fn()
    // 페이지 이동을 할 경우 스크롤 위치가 최상위에 놓이게 되는데 
    // 이 테스트 환경에서는 그 부분이 오류가 발생
    // 따라서 위의 모의함수를 만들어 줘서 오류 발생 방지!
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = shallowMount(Movie, {
      global: {
        plugins: [
          store,
          router,
          loadImage
        ]
      }
    })
  })

  test('최초 접속한 URL의 파라미터를 확인합니다', () => {
    expect(wrapper.vm.$route.params.id).toBe('tt1234567?')
  })
  test('지정한 이미지 크기로 URL을 변경합니다', () => {
    const url = 'https://google.com/sample_image_SX300.jpg'
    expect(wrapper.vm.requestDiffSizeIamge(url)).toContain('SX700')
    expect(wrapper.vm.requestDiffSizeIamge(url, 900)).toContain('SX900')
  })
  test('정상적인 이미지 주소가 아닌 경우 빈 문자열을 반환합니다', () => {
    expect(wrapper.vm.requestDiffSizeIamge()).toBe('')
  })
})