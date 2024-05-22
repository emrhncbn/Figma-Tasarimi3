const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-teal-400 w-full">
      <div className="bg-white w-[1000px] h-[600px] rounded-lg overflow-hidden shadow-lg flex">
        <div className="bg-teal-400 w-[35.35%] flex items-center justify-center p-10">
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full"
              src="https://s3-alpha-sig.figma.com/img/c520/dd38/de279ed06fcddcabdbee3c5ac33f8767?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EC-wzbiqexdqYz6zZso0p3QGi02j1iNDZlJy6WAmZk~EbBS4Um3DpjpaXZ12fxyfewO2UGTRf7dQYS0OhM0e7g5gEpTHNvt7UIrFHcJMwZ~gHqyFrA3fc6sI8VhxROtWKI6CN8mcX45C8AzjmeXzWKRHPTLYz9spqgFKdqJYWhB-LES7oyfMzFnMuPQtE9yM3bLgv1K~e8YfA6NNqmiDiZUyoKfJmvWVPVrpv7Hds0lBnLXK4KVKf2hC8RdSji24rTPzPKIE6e5bsB0NnFaoCkwBJ1iEea479zYeIx1V~S0s9kIyWfOCLNjdwA8J5bokTDartTIw48jKJltZDOVDNA__"
              alt="Lion"
              />
          </div>
        </div>
        <div className="w-2/3 flex items-center justify-center p-10">
          <div className="rounded-lg overflow-hidden w-full">
            <div className="p-8">
              <h1 className="text-5xl text-center font-bold text-gray-700 mb-9">LOGIN</h1>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="flex justify-center">
                      <input className="w-full h-[60px] border border-gray-800 p-4 mb-4" type="text" placeholder="Username" />
                    </td>
                  </tr>
                  <tr>
                    <td className="flex justify-center">
                      <input className="w-full h-[60px] border border-gray-800 p-4 mb-4" type="password" placeholder="Password" />
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center justify-between">
                      <button className="bg-teal-400 w-1/2 h-12 font-bold text-white text-opacity-80 border border-gray-800 ">LOGIN</button>
                      <div className="flex flex-col items-center justify-center pl-4">
                        <a className="mt-4 font-bold text-gray-600" href="#">Forgot password</a>
                        <a className="mt-4 font-bold text-gray-600" href="#">Register</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
