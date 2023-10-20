import React from 'react'

const FrontHeader = ({data}) => {
  return (
      <div className="frontHeader flex gap-7 items-center w-full">
          <img src={data.photo} alt="" className='w-[151px] h-[151px] object-contain' />
          <div className="headerInfo border text-center flex-1 p-3 border-[#3465a4]">
              <h1 className="varsityName text-[20pt] font-bold font-serifBold">Leading University, Sylhet</h1>
              <h2 className="deptName text-[16pt]">{data.deptName ? data.deptName : '--'}</h2>
              <div className='text-start pt-4'>
                  <table className='border-collapse font-serif text-[14pt]'>
                      <tbody>
                          <tr >
                              <td className="font-serifBold w-[8rem] align-top" >Course Code: </td>
                              <td>{data.courseCode ? data.courseCode : '--'}</td>
                          </tr>
                          <tr>
                              <td className="font-serifBold w-[8rem] align-top">Course Title:</td>
                              <td>{data.courseTitle ? data.courseTitle : '--'}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default FrontHeader