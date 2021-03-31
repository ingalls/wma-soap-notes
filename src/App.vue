<template>
    <div id="app h-full w-full">
        <div class='grid col col--12 px24 py24'>
            <div class='col col--2'>
                <img src="./assets/wildmed-logo.svg" alt="Wilderness Medical Associates International">
                <div class='flex-parent flex-parent--center-main pt12'>
                    <button @click='exporter' class='btn round flex-child' style='background-color: #78a22e;'>Save PDF</button>
                </div>
            </div>
            <div class='grid col col--10'>
                <div class='col col--6 px6 pb6 border border--gray-light'>
                    <label class='txt-bold'>Name:</label>
                    <input v-text='name' class='input' placeholder='John Smith'/>
                </div>
                <div class='col col--6 px6 pb6 border-t border-r border-b border--gray-light'>
                    <label class='txt-bold'>Sex:</label>
                    <input v-text='sex' class='input' placeholder='Female'/>
                </div>
                <div class='col col--4 px6 pb6 border-b border-l border-r border--gray-light'>
                    <label class='txt-bold'>Age:</label>
                    <input v-text='age' class='input' placeholder='63'/>
                </div>
                <div class='col col--4 px6 pb6 border-r border-b border--gray-light'>
                    <label class='txt-bold'>Birthdate:</label>
                    <input v-text='birthdate' class='input' placeholder='DD/MM/YYYY'/>
                </div>
                <div class='col col--4 grid px6 pb6 border-r border-b border--gray-light'>
                    <div class='col col--9'>
                        <label class='txt-bold'>Weight:</label>
                        <input v-text='weight' class='input' placeholder='120'/>
                    </div>
                    <div class='col col--3 pl6 pt12'>
                        <label class='txt-s radio-container ml6'>
                            <input v-text='unit' name='radio-basic' type='radio'>
                            <div class='radio radio--s-label mr6'></div>kg
                        </label>
                        <label class='txt-s radio-container ml6'>
                            <input v-text='unit' name='radio-basic' type='radio'>
                            <div class='radio radio--s-label mr6'></div>lbs
                        </label>
                    </div>
                </div>
                <div class='col col--6 px6 pb6 border-l border-r border--gray-light'>
                    <label class='txt-bold'>Emergency Contact:</label>
                    <input v-text='emergencycontact' class='input' placeholder='DD/MM/YYYY'/>
                </div>
                <div class='col col--6 px6 pb6 border-r border--gray-light'>
                    <label class='txt-bold'>Phone:</label>
                    <input v-text='phone' class='input' placeholder='###-###-####'/>
                </div>
            </div>
            <div class='col col--12 grid px6 pb6 border border--gray-light'>
                <div class='col col--12 px6'>
                    <label class='txt-bold'>Scene:</label>
                    <textarea v-text='scene' class='textarea'/>
                </div>
                <div class='col col--5 px6 pb6'>
                    <label><span class='txt-bold'>S</span>ymptoms:</label>
                    <textarea v-text='symptoms' class='textarea'/>
                </div>
                <div class='col col--3 px6 pb6'>
                    <label><span class='txt-bold'>A</span>llergies:</label>
                    <textarea v-text='allergies' class='textarea'/>
                </div>
                <div class='col col--4 px6 pb6'>
                    <label><span class='txt-bold'>M</span>edications:</label>
                    <textarea v-text='medications' class='textarea'/>
                </div>
                <div class='col col--5 px6 pb6'>
                    <label><span class='txt-bold'>P</span>ertinent History:</label>
                    <textarea v-text='pertinenthistory' class='textarea'/>
                </div>
                <div class='col col--3 px6 pb6'>
                    <label><span class='txt-bold'>L</span>ast Ins/Outs:</label>
                    <textarea v-text='lastinsouts' class='textarea'/>
                </div>
                <div class='col col--4 px6 pb6'>
                    <label><span class='txt-bold'>E</span>vents:</label>
                    <textarea v-text='events' class='textarea'/>
                </div>
            </div>
            <div class='col col--12 grid px6 pb6 border-l border-r border-b border--gray-light'>
                <div class='col col--12'>
                    <label class='txt-bold'>Physical Exam:</label>
                    <textarea v-text='physicalexam' class='textarea'/>
                </div>
            </div>
            <div class='col col--12 grid px6 pb6 border-l border-r border-b border--gray-light' style='align-items: flex-start;'>
                <div class='col col--8 grid'>
                    <div class='col grid grid col--12 txt-bold'>
                        <div class='col col--1 align-center'>Time</div>
                        <div class='col col--2 align-center'>Pulse</div>
                        <div class='col col--2 align-center'>Resp.</div>
                        <div class='col col--1 align-center'>BP</div>
                        <div class='col col--3 align-center'>Skin</div>
                        <div class='col col--1 align-center'>Temp</div>
                        <div class='col col--2 align-center'>AVPU</div>
                    </div>
                    <div class='col grid col--12'>
                        <div class='col col--1 px3'><input class='input'/></div>
                        <div class='col col--2 px3'><input class='input'/></div>
                        <div class='col col--2 px3'><input class='input'/></div>
                        <div class='col col--1 px3'><input class='input'/></div>
                        <div class='col col--3 px3'><input class='input'/></div>
                        <div class='col col--1 px3'><input class='input'/></div>
                        <div class='col col--2 px3'><input class='input'/></div>
                    </div>
                </div>
                <div class='col col--4'>
                    <img src="./assets/bob.png" alt="Physical Exam">
                </div>
            </div>
            <div class='col col--12 grid pb6 border-l border-r border-b border--gray-light'>
                <div class='col col--12 bg-black color-white align-center'>ASSESSMENT AND TREATMENT PLAN</div>
                <div class='col col--4 bg-black color-white align-center'>A = Assessment (Problem List)</div>
                <div class='col col--4 bg-black color-white align-center'>A' = Anticipated Problems</div>
                <div class='col col--4 bg-black color-white align-center'>P = Treatment Plan</div>

                <div class='col col--12 grid py12'>
                    <div class='col col--4 px6'><textarea class='textarea'/></div>
                    <div class='col col--4 px6'><textarea class='textarea'/></div>
                    <div class='col col--4 px6'><textarea class='textarea'/></div>
                </div>
            </div>
            <div class='col col--12 grid pb6 border-l border-r border-b border--gray-light'>
                <div class='col col--12 bg-black color-white align-center'>ADDITIONAL NOTES</div>
                <div class='col col--12 px6'><textarea v-text='additionalnotes' class='textarea'/></div>
            </div>
            <div class='col col--12 grid pb6'>
                <div class='col col--4 align-center'>Face any challenge, anywhere.</div>
                <div class='col col--4 align-center'>2021 Wilderness Medical Associates International</div>
                <div class='col col--4 align-center'><a href='https://www.wildmed.com'>www.wildmed.com</a></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: function() {
        return {
            name: '',
            sex: '',
            age: '',
            birthdate: '',
            weight: 'lbs',
            units: '',
            emergencycontact: '',
            phone: '',
            scene: '',
            symptoms: '',
            allergies: '',
            medications: '',
            pertinenthistory: '',
            lastinsouts: '',
            events: '',
            physicalexam: '',
            additionalnotes: ''
        };
    },
    methods: {
        exporter() {
            console.error('EXPORT');
        }
    }
}
</script>
