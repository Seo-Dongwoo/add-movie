describe('첫 번쨰 테스트', () => {
  it('프로젝트 페이지 이동합니다', () => {
  cy.visit('/')
  // 일단 개발 페이지를 열어주고 두번째로는 cypress를 열어준다.
  cy.get('header .logo')
  // header .logo 검색
  cy.get('#heropy')
  })
})