import React from 'react'
import './question.css'
import tree from './images/tree.png';
export default function Questions() {
  return (
    <div>
        <form action="">
        {/* email */}
        <fieldset className='email'>
            <legend>Email <span className='required'>*</span></legend>
            <label ><input type="checkbox" />Record lencholachisa11@gmail.com as the email to be included with my response</label>
        </fieldset>
        {/* question 1 */}
        <fieldset className='question'>
            <legend>The number of edges from the root to a node is called _______________ of the tree.</legend>
            <label><input type="radio" name="one" id="option1" /> Height</label>
            <label><input type="radio" name="one" id="option2" /> Depth</label>
            <label><input type="radio" name="one" id="option3" /> Width</label>
            <label><input type="radio" name="one" id="option4" /> Length</label>
        </fieldset>

        {/* question 2 */}
        <fieldset className='question'>
            <legend>What is special about the in-order traversal of a binary search tree?
            </legend>
            <label><input type="radio" name="two" id="option1" /> It traverses in a non increasing order
            </label>
            <label><input type="radio" name="two" id="option2" /> It traverses in an increasing order
            </label>
            <label><input type="radio" name="two" id="option3" /> It traverses in a random fashion
            </label>
            <label><input type="radio" name="two" id="option4" /> It traverses based on the priority of the node
            </label>
        </fieldset>

        {/* question 3 */}
        <fieldset className='question'>
            <legend>What are the worst case and average case complexities of a binary search tree?
            </legend>
            <label><input type="radio" name="three" id="option1" /> O(n), O(n)
            </label>
            <label><input type="radio" name="three" id="option2" /> O(logn), O(logn)
            </label>
            <label><input type="radio" name="three" id="option3" /> O(logn), O(n)
            </label>
            <label><input type="radio" name="three" id="option4" /> O(n), O(logn)
            </label>
        </fieldset>

        {/* question 4 */}
        <fieldset className='question'>
            <legend>What is the space complexity of the in-order traversal in the recursive fashion? (d is the tree depth and n is the number of nodes)
            </legend>
            <label><input type="radio" name="four" id="option1" /> O(1)
            </label>
            <label><input type="radio" name="four" id="option2" /> O(nlogd)
            </label>
            <label><input type="radio" name="four" id="option3" /> O(logd)
            </label>
            <label><input type="radio" name="four" id="option4" /> O(d)
            </label>
        </fieldset>
        {/* question 5 */}
        <fieldset className='question'>
            <legend>For the tree below, write the in-order traversal.
            </legend>
            <img src={tree} alt="tree" />
            <label><input type="radio" name="five" id="option1" /> 6, 2, 5, 7, 11, 2, 5, 9, 4
            </label>
            <label><input type="radio" name="five" id="option2" /> 6, 5, 2, 11, 7, 4, 9, 5, 2
            </label>
            <label><input type="radio" name="five" id="option3" /> 2, 7, 2, 6, 5, 11, 5, 9, 4
            </label>
            <label><input type="radio" name="five" id="option4" /> 2, 7, 6, 5, 11, 2, 9, 5, 4
            </label>
        </fieldset>
                {/* question 6 */}
                <fieldset className='question'>
            <legend>In a binary search tree, the inserted node will always end up as a leaf node in the tree.
            </legend>
            <label><input type="radio" name="six" id="option1" /> True</label>
            <label><input type="radio" name="six" id="option2" /> False</label>
        </fieldset>
                {/* question 7 */}
                <fieldset className='question'>
            <legend>Which of the following properties are obeyed by all six tree – traversals?</legend>
            <label><input type="radio" name="seven" id="option1" /> Left subtrees are visited before right subtrees
            </label>
            <label><input type="radio" name="seven" id="option2" /> Right subtrees are visited before left subtrees
            </label>
            <label><input type="radio" name="seven" id="option3" /> Root node is visited before left subtree
            </label>
            <label><input type="radio" name="seven" id="option4" /> Root node is visited before right subtree
            </label>
        </fieldset>

        {/* question 8 */}
        <fieldset className='question'>
            <legend>Which of the following describes the smallest node in the right subtree of a node in a binary search tree, given the node has a right subtree.
            </legend>
            <label><input type="radio" name="eight" id="option1" /> In-order Predecessor
            </label>
            <label><input type="radio" name="eight" id="option2" /> Pre-order Successor
            </label>
            <label><input type="radio" name="eight" id="option3" /> In-order Successor
            </label>
            <label><input type="radio" name="eight" id="option4" /> Post-order Predecessor
            </label>
        </fieldset>

        {/* footer */}
        <div className="buttons">
        <input type="Submit" />
        <p className='clear'>Clear form</p>
        </div>

        </form>
        <footer className='footer'>
            <p>This form was created by <em>Lionex Man (Lencho)</em>. <a href="#">Report Abuse</a></p>
            <h3><strong><a href="#">Google</a></strong> Forms</h3>
        </footer>
    </div>
  )
}
