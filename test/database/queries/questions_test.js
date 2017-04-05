import chai, { expect } from 'chai'
import * as question from '../../../src/database/queries/questions'

//fixing the ability to add multiple things to db
//test database


describe('Question Tests', () => {
  const newQuestion = [
    {
      tags: "existentialism",
      question: "What is the number that represents the meaning of life",
      level: "10",
      answer: "42"
    },
    {
      tags: "woodchuckin'",
      question: "How much wood could a woodchuck chuck if a woodchuck could chuck wood",
      level: "9",
      answer: "a lot"
    },
    {
      tags: "Don't let Shereef see this",
      question: "What is the most inefficient algorithm",
      level: "0",
      answer: "THE ALGORITHM"
    }
  ]

  it('Should be type object', () => {
    expect(question).to.be.a('object')
  })

  describe('create a Q', () => {
    it('should create a Q, not a queue', () => {
      return question.create( newQuestion[0] )
        .then( question => {
          expect(question[0].question).to.equal('What is the number that represents the meaning of life')
        })
    })
  })

  describe('find by Tag', () => {
    it('should find a question by the tag', () => {
      return question.create( newQuestion[1] )
        .then( () => {
          return question.findbyTag( "woodchuckin'" )
          .then( question => {
            expect(question[0].level).to.equal('9')
          })
        })
    })
  })


  describe('find by Level', () => {
    it('should find a question by the level', () => {
      return question.create( newQuestion[1] )
        .then( () => {
          return question.findbyLevel( "9" )
          .then( question => {
            expect(question[0].tags).to.equal("woodchuckin'")
          })
        })
    })
  })

  describe('update by Tag', () => {
    it('should update a question by the tag', () => {
      return question.create( newQuestion[1] )
        .then( () => {
          return question.updatebyTag( "woodchuckin'", {question: 'why do you want to become a full stack developer', answer: "pancakes"} )
          .then( question => {
            expect(question[0].answer).to.equal("pancakes")
          })
        })
    })
  })

  // describe('Multiple Tags', () => {
  //   it('should store tags into an array when more than one exist', () => {
  //     return question.create( newQuestion[1] )
  //       .then( () => {
  //         return question.updatebyTag("woodchuckin'", {tags: 'things', tags: 'stuff'})
  //         .then( question => {
  //           console.log('tags--->', question[0].tags)
  //           expect(question[0].tags).to.equal("things")
  //         })
  //       })
  //   })
  // })

  describe('update by Level', () => {
    it('should update a question by the level', () => {
      return question.create( newQuestion[2] )
        .then( () => {
          return question.updatebyLevel( '0', {level: '1000'} )
          .then( question => {
            expect(question[0].level).to.equal('1000')
          })
        })
    })
  })

  describe('delete by Question', () => {
    it('should delete a question', () => {
      return question.create( newQuestion[0] )
        .then( () => {
          return question.deleteByQuestion( "What is the number that represents the meaning of life" )
          .then( question => {
            expect(question[0]).to.equal( undefined )
          })
        })
    })
  })


  describe('delete by Level', () => {
    it('should delete by level', () => {
      return question.create( newQuestion[0] )
        .then( () => {
          return question.deleteByLevel( "yes" )
          .then( question => {
            expect(question[0]).to.equal( undefined )
          })
        })
    })
  })

})
