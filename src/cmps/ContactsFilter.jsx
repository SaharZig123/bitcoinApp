import { Component } from 'react'

export class ContactsFilter extends Component {
    state = {
        term: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })
    }



    render() {
        const { term } = this.state
        return (
            <form className='contact-filter'>
                <section className='input-container'>
                    <label htmlFor="term">Search</label>
                    <input onChange={this.handleChange} value={term} type="text" name="term" id="term" />
                </section>
            </form>
        )
    }

}
