import React from 'react'
import './ProblemCard.css'

const ProblemCard = () => {
  return (
    <div className='problem-card'>
        <h1>1. Two Sum</h1>
        <h4>Description : </h4>
        <p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
        <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>
        <p>You can return the answer in any order.</p>

        
        <br></br>
        <br></br>
        <br></br>
        <p><strong class="example">Example 1:</strong></p>
        <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
        <br></br>
        <br></br>
        <strong>Output:</strong> [0,1]
        <br></br>
        <br></br>
        <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
        </pre>
        <br></br>

        <p><strong class="example">Example 2:</strong></p>

        <pre><strong>Input:</strong> nums = [3,2,4], target = 6
        <br></br>
        <br></br>
        <strong>Output:</strong> [1,2]
        </pre>
        <br></br>

        <p><strong class="example">Example 3:</strong></p>
        <pre><strong>Input:</strong> nums = [3,3], target = 6
        <br></br>
        <br></br>
        <strong>Output:</strong> [0,1]
        </pre>
        <br></br>
        <br></br>
        <br></br>
        <p> </p>
    </div>
  )
}

export default ProblemCard