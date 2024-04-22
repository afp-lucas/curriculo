/* 
    Função para resetar o scroll sempre que a página recarregar
*/
const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

useEffect(() => {
  window.onbeforeunload = function () {
    resetWindowScrollPosition()
  }
}, [resetWindowScrollPosition])

useEffect(() => {
    window.history.scrollRestoration = 'manual'
}, []);

