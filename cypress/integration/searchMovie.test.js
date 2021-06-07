/**
 * 검색 페이지로 접근 후
 * 영화 제목을 'frozen'으로 , 표시 개수를 30개로 입력하고,
 * 영화 목록을 검색한다.
 * 영화 목록 30개가 잘 출력됩니다.
 * 영화 목록에서 'Frozen II' 영화 아이템을 클릭하면,
 * 영화 상세 정보 페이지로 이동합니다.
 * 상세 정보 페이지에서 정보를 확인할 수 있습니다.
 */

describe('영화 검색(겨울왕국2', () => {
  it('검색 페이지로 접근합니다', () => {
    cy.visit('/'),
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('영화를 검색합니다', () => {
    cy.get('input.form-control')
      .type('frozen')
      // type이란 매소드를 이용해서 입력
    cy.get('select.form-select:nth-child(2)')
    // nth-child(2)를 이용해 number부분 지정
      .select('30')
    cy.get('button.btn')
      .contains('Apply')
      .click()
    cy.wait(2000)
    cy.get('./movie')
      .should('have.length', 30)
      // movie라는 각각의 아이템이 30개 까지 출력이 잘되는지 확인
  })
  it('겨울왕국2 영화 아이템을 선택합니다', () => {
    cy.get('.movie .title')
      .contains('Frozen II')
      .click()
  })
  it('영화 상세 정보를 확인합니다', () => {
    cy.url() // http://localhost:8080/movie/tt4520988
      .should('include', '/movie/tt4520988') // toBe와 똑같은 원리(검증하는 매소드)
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('Movie')
    cy.get('.title')
      .contains('Frozen II')
  })
})